import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const GiftCartSchema = new mongoose.Schema(
    {
        products: [
            {
                productId: {
                    type: Number,
                },
                countryCode: {
                    type: String,
                },
                quantity: {
                    type: Number,
                },
                unitPrice: {
                    type: Number
                },
                customIdentifier: {
                    type: String,
                },
                SenderName: {
                    type: String,
                },
                recipientEmail: {
                    type: String,
                },
                countryCode: {
                    type: String,
                },
                phoneNumber: {
                    type: Number
                },
                /*
                style: {
                  style: String,
                  color: String,
                  image: String,
                },
                */
            },
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        user: {
            type: ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const GiftCard = mongoose.models.GiftCard || mongoose.model("GiftCard", GiftCartSchema);

export default GiftCard;
