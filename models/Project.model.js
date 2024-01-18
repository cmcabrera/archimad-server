const { Schema, model } = require("mongoose")

const projectSchema = new Schema(
    {
        images: [{
            type: String,
        }],
        description: {
            type: String
        },
        location: {
            type: String
        },
        year: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Project = model("Project", projectSchema)

module.exports = Project