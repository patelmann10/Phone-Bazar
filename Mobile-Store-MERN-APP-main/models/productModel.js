import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // slug: {
    //   type: String,
    //   required: true,
    // },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      // type: mongoose.ObjectId,
      type:String,
      // ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
      
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
