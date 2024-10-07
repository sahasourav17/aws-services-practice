const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const {
  accessKeyId,
  secretAccessKey,
  region,
  bucket,
} = require("../config/variables");

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

const uploadFile = async (file) => {
  try {
    const key = `${crypto.randomUUID()}_${file.originalname}`;
    const params = {
      Bucket: bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    const command = new PutObjectCommand(params);

    await s3Client.send(command);
    const objectUrl = `https://${bucket}.s3.amazonaws.com/${key}`;

    return objectUrl;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Error uploading file to S3");
  }
};

const uploadPrivateFile = async (file) => {
  try {
    const key = `${crypto.randomUUID()}_${file.originalname}`;
    const params = {
      bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "private",
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    const urlParams = {
      Bucket: params.bucket,
      Key: params.Key,
      Expires: 60,
    };
    const objectUrl = await getSignedUrl(
      s3Client,
      new GetObjectCommand(urlParams)
    );

    return objectUrl;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Error uploading file to S3");
  }
};

module.exports = { uploadFile, uploadPrivateFile };
