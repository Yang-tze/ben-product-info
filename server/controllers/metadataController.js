const model = require('../model');
const { handleResponse } = require('./utils.js');

const getProductById = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.getProductById(id, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const getProductByName = (req, res) => {
  const {
    params: { name },
  } = req;
  if (name) {
    model.getProductByName(name, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const postProductMetadata = (req, res) => {
  const { body } = req;
  if (Object.keys(body).length) {
    model.addProduct(body, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const patchProductMetadata = (req, res) => {
  const {
    params: { id },
  } = req;
  const { body } = req;
  if (Object.keys(body).length) {
    model.updateProduct(id, body, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const deleteProduct = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.deleteProduct(id, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

module.exports = {
  getProductById,
  getProductByName,
  deleteProduct,
  postProductMetadata,
  patchProductMetadata,
};
