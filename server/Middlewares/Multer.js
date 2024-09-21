const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./Public"; // Use a temporary directory for initial upload
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|gif|png/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            cb(null, true);
        } else {
            req.fileValidationError = "Only image files (JPEG, JPG, GIF, PNG) are allowed!";
            cb(new Error("Only image files (JPEG, JPG, GIF, PNG) are allowed!"), false);
        }
    }
});

module.exports = upload;
