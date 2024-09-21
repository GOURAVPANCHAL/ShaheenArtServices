const multer = require('multer');

const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: "File size exceeds the 5 MB limit. Please upload a smaller file."
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message
        });
    } else if (err) {
        return res.status(400).json({
            success: false,
            message: "you can use only this format jpeg|jpg|gif."
        });
    }
    else{
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        });
    }
    next(err);
};

module.exports = multerErrorHandler;
