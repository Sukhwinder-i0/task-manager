import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
    title: string,
    description: string,
    completed: boolean,
    completedAt: Date
}

const taskSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        compeltedAt: {
            type: Date,
            default: Date.now
        }
    }, {timestamps: true}
)

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;