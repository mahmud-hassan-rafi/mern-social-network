import multer from "multer";
import path from "path";

// multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join("src", "middlewares", "upload", "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

// multer middleware
export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});
limit: "5MB";
