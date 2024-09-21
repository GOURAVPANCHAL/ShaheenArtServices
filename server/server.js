const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const compression = require("compression");
const { connectDb } = require("./Db/ConnectDb");
const categoryRouter = require("./Routes/CategoryRouter");
const multerErrorHandler = require("./Middlewares/FileError");
const productRouter = require("./Routes/ProductRouter");

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDb();

// Middleware to enhance security

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);


app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable CORS for all origins (configure as needed)
app.use(mongoSanitize()); // Prevent NoSQL injection attacks
app.use(xss()); // Sanitize user input to prevent XSS attacks
app.use(hpp()); // Protect against HTTP parameter pollution
app.use(compression()); // Compress responses for faster loading
app.use(express.json({ limit: '10kb' })); // Parse JSON bodies, limit size to prevent large payload attacks
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // Parse URL-encoded bodies
app.set(express.static("Public"))


app.use("/api", categoryRouter)
app.use("/api", productRouter)

app.use(multerErrorHandler);

// Basic route for testing
app.get("/", (req, res) => {
    res.send("Hello, World!");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
