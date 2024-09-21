const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadImage = async (file, folder) => {
    try {
        const result = await cloudinary.uploader.upload(file, { folder });
        if (result && result.secure_url) {
            return result.secure_url;
        } else {
            throw new Error('Image upload failed');
        }
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error; 
    }
};

const deleteImage = async (file) => {
    try {
        await cloudinary.uploader.destroy(file)
        console.log("Image Delete Successfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    uploadImage, deleteImage
}