const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

// Configure Cloudinary once at the top
cloudinary.config({
  cloud_name: "deebzxzk9",
  api_key: "348942262427774",
  api_secret: "W0SZgckwFIbwduIn7R5mtgaJ1ec",
});

const uploadFileToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = {
  uploadFileToCloudinary,
};
