import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinnaryConfig.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'learnBuds_project', // optional, the name of the folder in Cloudinary
    allowedFormats: ['jpg', 'png'],
  },
});

const upload = multer({ storage: storage });

export default upload;
