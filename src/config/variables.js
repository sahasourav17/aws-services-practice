const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const bucket = process.env.S3_BUCKET;
module.exports = {
  PORT,
  NODE_ENV,
  accessKeyId,
  secretAccessKey,
  region,
  bucket,
};
