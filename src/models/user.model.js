import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], trim: true, minlength: [3, "Name must be at least 3 characters long"], maxlength: [30, "Name must be less than 30 characters long"] },
    email: { type: String, required: [true, "Email is required"], unique: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"], lowercase: true },
    password: { type: String, required: [true, "Password is required"], minlength: [8, "Password must be at least 8 characters long"] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
