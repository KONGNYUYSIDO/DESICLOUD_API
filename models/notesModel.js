import mongoose from "mongoose";


const notesSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: [ 'Work', 'Personal', 'Ideas', 'Meetings' ],
            required: true,
        },
    }
);

export default mongoose.model( 'notes', notesSchema );