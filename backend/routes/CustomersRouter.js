const path = require('path');
const express = require('express');
const multer = require('multer');
const { saveCustomer, getCustomers, getOneCustomer, updateOneCustomer, deleteOneCustomer } = require('../controllers/customersController');

const Router = express.Router();


const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './enquiries');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 100000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});


Router.post('/',upload.single('upload'),saveCustomer);

Router.get('/', getCustomers);

Router.get("/:id",getOneCustomer);

Router.put("/:id", upload.single("enquiryupdate"),updateOneCustomer);

Router.delete("/:id", deleteOneCustomer);
  
module.exports = Router;