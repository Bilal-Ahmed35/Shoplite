const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    console.log("1. Middleware entered");

    const authHeader = req.headers.authorization;

    console.log("2. Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("3. No token");

        return res.status(401).json({
            message: "No token",
        });
    }

    const token = authHeader.split(" ")[1];

    console.log("4. Token extracted");

    try {
        console.log("5. Before verify");

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("6. After verify");
        console.log(decoded);

        req.user = decoded;

        console.log("7. Before next");

        next();

        console.log("8. After next");

    } catch (error) {
        console.log("JWT Error:", error);

        return res.status(401).json({
            message: "Invalid token",
        });
    }
};

module.exports = protect;