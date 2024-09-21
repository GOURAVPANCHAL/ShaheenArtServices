const { createCategory, getCategory, deleteCategory, getSingleCategoryId, getSingleCategoryByName, updateCategory } = require("../Controllers/CategoryControllers")
// const compressAndSaveImage = require("../Middlewares/compressAndSaveImage")
const upload = require("../Middlewares/Multer")

const categoryRouter = require("express").Router()

categoryRouter.post("/create-category", upload.single("categoryImage"), createCategory)
categoryRouter.get("/get-all-category", getCategory)
categoryRouter.delete("/delete-category/:id", deleteCategory)
categoryRouter.get("/get-single-category/:id", getSingleCategoryId)
categoryRouter.get("/get-category-by-name/:id", getSingleCategoryByName)
categoryRouter.put("/update-category/:id",upload.single("categoryImage") , updateCategory)

module.exports = categoryRouter