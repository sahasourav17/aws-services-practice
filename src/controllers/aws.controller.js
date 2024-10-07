const fs = require("fs");
const S3Model = require("../model/s3");
const { errorResponseHandler } = require("../helpers/errorResponseHandler");
const s3UploadFile = async (req, res) => {
  try {
    const { name } = req.body;

    const fileUrl = await S3Model.uploadFile(req.file);
    res.created({ fileUrl, name }, "File successfully uploaded");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const s3PrivateUploadFile = async (req, res) => {
  try {
    const { name } = req.body;

    const fileUrl = await S3Model.uploadPrivateFile(req.file);
    res.created({ fileUrl, name }, "Private File successfully uploaded");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = { s3UploadFile, s3PrivateUploadFile };
