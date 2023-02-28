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
      shares
    } = req.body;
    
    // Store the file type and mime type in variables
    const {
      path,
      mimetype
    } = req.file;

    // Create a Dummy created by Input field for the schema
    const createdBy = 'Sithembiso Maphanga';

    // Try saving the image on Cloudinary and store the result in a variable
    const result = await cloudinary.uploader.upload(req.file.path);
    const public_id = result.public_id;
    const url = result.secure_url;
    const uploadedOnline = result ? true : false;

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