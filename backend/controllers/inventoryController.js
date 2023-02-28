const Inventory = require("../models/inventoryModel");
const cloudinary = require("cloudinary").v2;


cloudinary.config({
  cloud_name: 'dsnjyhzzf',
  api_key: '343561988865116',
  api_secret: 'xDqeZbjv4Mq01MKSINjj2g-O-74'
});


exports.createInventory = async (req, res) => {
  try {
    // Grab input fields from the request body and store them in variables
    // Add inventory costprice
    const {
      rekaStockId,
      productDescription,
      manufacturepn,
      supplier,
      quantity,
      color,
      department,
      brands,
      store,
      status,
      comments,
      likes,
      shares,
      costPrice,
      salePrice
    } = req.body;
    

    // Check if there is a File first in the body before getting data then 
    // decide what to do if there is no file
    // Store the file type and mime type in variables
    const {
      path,
      mimetype
    } = req.file;

    // Create a Dummy created by Input field for the schema
    const createdBy = 'Sithembiso Maphanga';

    // Try saving the image on Cloudinary and store the result in a variable
    // try save to cloudinary or move to unsaved images for later update when having connection
    let result = '';
    let public_id = '';
    let url = ''
    let uploadedOnline = false
    await cloudinary.uploader.upload(req.file.path)
    .then((res)=>{
      console.log("succesffuly Uploaded Cloudinary image wiht result :",res);
      result = res;
      public_id = result.public_id;
      url = result.secure_url;
      uploadedOnline = result ? true : false;
    }
    )
    .catch((err)=>{
      console.log("could not Uploaded Cloudinary image with error :",err);
      result = '';
      public_id = '';
      url = ''
      uploadedOnline = false
      // Here need to later need to move to a folder where files can be retrieved and uploaded 
      // once I have network
    })


    // Create a new inventory object
    const inventory = new Inventory({
      url: url || '',
      public_id: public_id || '',
      rekaStockId: rekaStockId || '',
      createdBy: createdBy || '',
      productDescription: productDescription || '',
      manufacturepn: manufacturepn || '',
      supplier: supplier || '',
      status: status || '',
      comments: comments || '',
      quantity: quantity || 0,
      color: color || '',
      department: department || '',
      brands: brands || '',
      store: store || '',
      likes: likes || 0,
      shares: shares || 0,
      file_path: path || '',
      file_mimetype: mimetype || '',
      costPrice: costPrice || 0,
      salePrice: salePrice || 0,
      uploadedOnline: uploadedOnline
    });

    // Save the inventory to the database
    const savedInventory = await inventory.save();

    res.status(200).json({
      status: "success",
      data: savedInventory
    });
  } catch (error) {
    console.error(error);
    console.log('process.env.CLOUDINARY_API_KEY = ',process.env.CLOUDINARY_API_KEY)
    res.status(400).json({
      message: "Inventory not created successfully"
    });
  }
};

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json({ message: "Inventory not found",data:inventory });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" ,data: error});
  }
};

exports.getInventories = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    const sortedByCreationDate = inventory.sort(
      (a, b) => b.createdAt - a.createdAt
      );
    res.status(200).json({ message: "success",data: sortedByCreationDate });
  } catch (error) {
    res.status(500).json({ message: "failure",data: error });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// This was tested 28/02/2023 working delete as expected 
// neeed to review, implement and test and modify crud service for these cruds
exports.deleteInventory = async (req, res) => {
  try {
      const inventory = await  Inventory.findById(req.params.id);
      if(!inventory) return res.status(404).send("Inventory not found");
      await cloudinary.uploader.destroy(inventory.public_id);
      await inventory.remove();
      res.status(200).json({ message: "Inventory deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};