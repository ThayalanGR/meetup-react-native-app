import mongoose, { Schema } from 'mongoose';

const MeetUpSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Meetup', MeetUpSchema);