const salespointServices = require('../services/salespoints.service');

const getSalespoints = (size) => new Promise((resolve, reject) => {
  try {
    let salespoints = [];
    salespoints = salespointServices.readSalespoints()
    if(size){
      resolve(salespoints.slice(0, size));
    }else{
      resolve( salespoints );
    }
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});
  
const getSalespoint = (id) => new Promise((resolve, reject) => {
    try {
      resolve( salespointServices.readSalespoint(id) );
    } catch (error) {
      reject( error );
    }
});
  
const postSalespoint = (body) => new Promise((resolve, reject) => {
  try {
    resolve( salespointServices.createSalespoint(body) );
  } catch (error) {
    reject(error);
  }
});
  
const putSalespoint = (salespointID, body) => new Promise((resolve, reject) => {
  try {
    resolve( salespointServices.updateSalespoint(salespointID, body) );
  } catch (error) {
    reject(error);
  }
});
  
const deleteSalespoint = (id) => new Promise((resolve, reject) => {
    try {
      resolve( salespointServices.deleteSalespoint(id) );
    } catch (error) {
      reject(error);
    }
});
  
module.exports = {
    getSalespoints,
    getSalespoint,
    postSalespoint,
    putSalespoint,
    deleteSalespoint
}