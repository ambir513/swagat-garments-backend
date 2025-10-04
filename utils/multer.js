  import multer from "multer";
  import { v2 as cloudinary } from "cloudinary";
  import { configDotenv } from "dotenv";
  import { CloudinaryStorage } from "multer-storage-cloudinary";
  import path from "path";
  import { createId } from "@paralleldrive/cuid2";

  configDotenv();
  const CLOUD_NAME = process.env.CLOUDINARY_NAME;
  const CLOUD_API_KEY = process.env.CLOUDINARY_API_KEY;
  const CLOUND_API_SECRET = process.env.CLOUDINARY_API_SECRET;

  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUND_API_SECRET,
  });

  function uploadMiddleware(folderName) {
    const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: (req, file) => {
        const folderPath = `${folderName.trim()}`;
        const fileExtension = path.extname(file.originalname).substring(1);
        const publicId = `${file.fieldname}-${createId()}`;

        return {
          folder: folderPath,
          public_id: publicId,
          format: fileExtension,
        };
      },
    });

    return multer({
      storage: storage,
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
      fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
      },
    });
  }

  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|webp|png/;
    const extname = filetypes.test(file.originalname.toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png) are allowed!"));
    }
  }

  export default uploadMiddleware;
