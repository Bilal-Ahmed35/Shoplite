require("dotenv").config();

const dns = require("dns");

// Force Node.js to use Cloudflare DNS
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.json());


app.get("/about", (req, res) => {
    res.json({
        app: "ShopLite",
        version: "1.0.0",
    });
});


app.use("/products", productRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});