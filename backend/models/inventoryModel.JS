const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema(
  {
    url: {
      type: String,
      trim: true,
    },
    public_id: {
      type: String,
      trim: true,
    },
    rekaStockId: {
      type: String,
      trim: true
    },
    createdBy: {
      type: String, // Assuming that createdBy refers to the User who created the inventory item
      trim: true,
    },
    productDescription: {
      type: String,
      trim: true
    },
    file_path: {
      type: String,
    },
    file_mimetype: {
      type: String,
    },
    supplier: {
      type: String,
    },
    manufacturepn: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    color: {
      type: String,
    },
    department: {
      type: String, // Assuming that department refers to a Category that the item belongs to
      ref: 'Category',
    },
    brands: {
      type: String,
    },
    store: {
      type: String,
    },
    likes: {
      type: Number, // Assuming that likes, comments, and shares are numerical values
      default: 0,
    },
    comments: {
      type: String,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['draft', 'published'], // Assuming that the status refers to the current state of the inventory item
      default: 'draft',
    },
    uploadedOnline: {
      type: Boolean, // Assuming that uploadedOnline refers to whether the item has been uploaded to the ecommerce website or not
      default: false,
    },     
  },
  {
    timestamps: true
  },
);

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;


// Inventory model and controller fields the same
// category
// -- Gearmotors,Servo Motors,Motors and Gearboxes, And Spares
// -- Lights and Lighting equipment
// -- Ellectronics and Ellectrical Supplies
// -- Industrial Supplies        
// -- Security and Cameras
// 
// brand

// Show models,views and controllers to perform crud operations on a server including cloudinary and multer image upload  middlewares using mvc