const { uploadImage, deleteImage } = require("../Config/Cloudnary");
const CategoryModel = require("../Models/CategoryModel");

const createCategory = async (req, res) => {
    try {
        console.log("My Data", req.body);
        console.log("my file", req.file);

        const { categoryName } = req.body;

        if (!categoryName) {
            return res.status(400).json({
                success: false,
                message: "Category Name is required."
            });
        }

        if (!req.file) {
            console.error("File not uploaded: ", req.file);
            return res.status(400).json({
                success: false,
                message: "Category Image is required."
            });
        }

        if (req.fileValidationError) {
            return res.status(400).json({
                success: false,
                message: req.fileValidationError
            });
        }

        const existingCategory = await CategoryModel.findOne({ categoryName });

        if (existingCategory) {
            return res.status(401).json({
                success: false,
                message: "This Category Name already exists."
            });
        }

        const imageUrl = await uploadImage(req.file.path, "ShaheenArt");
        const newCategory = new CategoryModel({ categoryName, categoryImage: imageUrl });
        await newCategory.save();

        res.status(200).json({
            success: true,
            message: "New Category created successfully.",
            data: newCategory
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};

const getCategory = async (req, res) => {
    try {
        const data = await CategoryModel.find()
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Category Record Not Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Category Record Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getSingleCategoryByName = async (req, res) => {
    try {
        const { name } = req.body
        const data = await CategoryModel.findOne({ categoryName: name })
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Category Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getSingleCategoryId = async (req, res) => {
    try {
        const { id } = req.body
        const data = await CategoryModel.findOne(id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Category Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await CategoryModel.findById(id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            })
        }
        if (data.categoryImage) {
            const deleteImageUrl = data.categoryImage.split("/").pop().split(".")[0]
            await deleteImage(deleteImageUrl)
        }
        await CategoryModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Category Image Delete Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        console.log(categoryName)
        const data = await CategoryModel.findById(id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            });
        }
        let imageUrl = data.categoryImage;
        if (req.file) {
            if (data.categoryImage) {
                const oldImagePublicId = data.categoryImage.split("/").pop().split(".")[0];
                await deleteImage(oldImagePublicId);
            }
            imageUrl = await uploadImage(req.file.path);
        }
        const updateRecord = await CategoryModel.findByIdAndUpdate(
            id,
            {
                categoryName: categoryName || data.categoryName,
                categoryImage: imageUrl
            },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Category updated successfully.",
            data: updateRecord
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};


module.exports = { createCategory, getCategory, deleteCategory, getSingleCategoryByName, getSingleCategoryId, updateCategory };
