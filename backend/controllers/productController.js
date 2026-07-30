const Product = require("../models/Product");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const cloudinary =
    require("../config/cloudinary");
const streamifier = require("streamifier");


// GET /products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// POST /products
const createProduct = async (req, res) => {
    try {

        const result = await uploadToCloudinary(
            req.file.buffer,
            Date.now() + req.file.originalname
        );

        const product = await Product.create({
            ...req.body,
            image: result.secure_url,
        });

        res.status(201).json(product);

    } catch (error) {

        res.status(400).json({
            message: error.message,
        });

    }
};


// GET /products/:id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// PUT /products/:id
const updateProduct = async (req, res) => {
    try {

        let updateData = { ...req.body };

        if (req.file) {
            const fileBuffer = req.file.buffer;
            const fileName = Date.now() + req.file.originalname;

            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "products",
                    public_id: fileName,
                },
                async (error, result) => {
                    if (error) {
                        console.log(error);
                        return res.status(400).json({
                            message: "Cloudinary upload failed",
                        });
                    }

                    updateData.image = result.secure_url;

                    const product = await Product.findByIdAndUpdate(
                        req.params.id,
                        updateData,
                        {
                            new: true,
                        }
                    );

                    if (!product) {
                        return res.status(404).json({
                            message: "Product not found",
                        });
                    }

                    res.json(product);
                }
            );

            streamifier.createReadStream(fileBuffer).pipe(stream);
            return;
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.json(product);

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// DELETE /products/:id
const deleteProduct = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        const publicId =
            product.image.split("/").pop().split(".")[0];

        await cloudinary.uploader.destroy(
            `products/${publicId}`
        );

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};