const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const compressAndSaveImage = (req, res, next) => {
    if (!req.file) return next(); // Proceed if no file is present

    const tempPath = req.file.path; // Path of the uploaded temporary file
    const finalPath = path.join(__dirname, "../Public", Date.now() + "-" + req.file.originalname); // Final path

    sharp(tempPath)
        .resize({ width: 800, height: 800, fit: 'inside' }) // Resize to fit within 800x800
        .jpeg({ quality: 70 }) // Set quality to reduce file size for JPEG
        .png({ compressionLevel: 3 }) // Adjust compression for PNG
        .toBuffer((err, buffer) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error processing image",
                });
            }

            // Check file size and adjust quality if needed
            if (buffer.length > 10 * 1024) { // If file size exceeds 10 KB
                sharp(buffer)
                    .resize({ width: 400, height: 400, fit: 'inside' }) // Resize further if necessary
                    .toBuffer((err, buffer) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: "Error reprocessing image",
                            });
                        }
                        fs.writeFile(finalPath, buffer, (err) => {
                            if (err) {
                                return res.status(500).json({
                                    success: false,
                                    message: "Error saving processed image",
                                });
                            }

                            // Delete the temporary file
                            fs.unlink(tempPath, (err) => {
                                if (err) {
                                    console.error("Failed to delete temp file:", err);
                                }
                            });

                            req.file.path = finalPath; // Update file path to the processed file
                            next();
                        });
                    });
            } else {
                fs.writeFile(finalPath, buffer, (err) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: "Error saving processed image",
                        });
                    }

                    // Delete the temporary file
                    fs.unlink(tempPath, (err) => {
                        if (err) {
                            console.error("Failed to delete temp file:", err);
                        }
                    });

                    req.file.path = finalPath; // Update file path to the processed file
                    next();
                });
            }
        });
};

module.exports = compressAndSaveImage;
