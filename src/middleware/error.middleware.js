const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message || "Internal server error";
        console.log(error);
        console.log(error.name);
        console.log(error.statusCode);


        // mongoose bad ObjectId
        if (error.name === "CastError") {
            const message = `Resource not found with this id`;
            error = new Error(message);
            error.statusCode = 404;
        }

        // mongoose duplicate key
        if (error.code === 11000) {
            const message = `Duplicate field value entered`;
            error = new Error(message);
            error.statusCode = 400;
        }
        
        // mongoose validation error
        if (error.name === "ValidationError") {
            const message = Object.values(error.errors).map((el) => el.message).join(" ");
            error = new Error(message.join(", "));
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
        
    } catch (error) {
        next(error);
    }
}

export default errorMiddleware;