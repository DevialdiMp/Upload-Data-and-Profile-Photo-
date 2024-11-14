const express = require("express");
const upload = require("../libs/multer");
const {
    addImage,
    getAllImages,
    getImageById,
    deleteImage,
    editImage,
} = require("../controllers/imageController");

const router = express.Router();

router.post("/add-image", upload.single("image"), addImage);
router.get("/get-all-image", getAllImages);
router.get("/getData/:id", getImageById);
router.delete("/delete-image/:id", deleteImage);
router.put("/update-data/:id", editImage);

module.exports = router;