import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    appointments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "ServiceHistory",
        default: [],
    },
    upcomingAppointments: {
        type: Number,
        required: true,
        default: 0,
    },

    notAvailable: {
        type: [String],
        default: [],
    },

    available: {
        type: Boolean,
        default: true,
    },
});

export default mongoose.model("Staff", staffSchema);
