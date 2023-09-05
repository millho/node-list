import { Schema } from "mongoose";


export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true, max: 15 },
        bathrooms: { type: Number, required: true, max: 15 },
        year: { type: Number, max: new Date().getFullYear() + 1 },
        price: { type: Number, required: true, },
        imgUrl: { type: String, },
        descriptions: { type: String, maxLength: 1000 }
    }
)