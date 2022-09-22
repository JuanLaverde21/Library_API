const salespointSchema = require('../models/salespoints.model');

const readSalespoints = () => new Promise((resolve, reject) => {
  salespointSchema.find()
    .then((salespoints) => resolve( salespoints ))
    .catch((error) => reject({code: 500, message: error}))
});

const readSalespoint = (id) => new Promise((resolve , reject) => {
  salespointSchema.findById(id)
  .then((salespoint) => resolve(salespoint))
  .catch((error) => reject({code: 500, message: error}) );
});

const createSalespoint = (salespoint) => new Promise((resolve,reject) => {
  const salespointDB = salespointSchema(salespoint);
  salespointDB.save()
    .then(() => resolve({code: 201, message: "salespoint created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateSalespoint = (id, salespoint) => new Promise((resolve , reject) => {
  salespointSchema.findByIdAndUpdate(id, salespoint)
    .then(() => resolve({code: 201, message: "Bsalespoint updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteSalespoint = (id) => new Promise((resolve , reject) => {
  salespointSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "salespoint deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readSalespoints,
  readSalespoint,
  createSalespoint,
  updateSalespoint,
  deleteSalespoint
}