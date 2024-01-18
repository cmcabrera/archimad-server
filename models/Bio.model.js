const { Schema, model } = require("mongoose")

const bioSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        picture: {
            type: String
        },
        email: {
            type: String
        },
        phone1: {
            type: String
        },
        phone2: {
            type: String
        },
        address: {
            type: String
        },
        role: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Bio = model("Bio", bioSchema)

module.exports = Bio