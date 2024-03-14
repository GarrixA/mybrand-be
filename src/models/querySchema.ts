import mongoose from "mongoose";

const schema = mongoose.Schema;

const querySchema = new schema(
    {
        name: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export default mongoose.model('Queries',querySchema)

