import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kaurprabdeep1:8885574545@cluster0.zmntkar.mongodb.net/Project').then(()=>console.log("DB Connected"));
}

//?retryWrites=true&w=majority&appName=Cluster0