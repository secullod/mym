
import mongoose, {Document, Schema} from 'mongoose';

export interface IGoogleUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    created: Date;
    updated: Date;
}

const googleUserSchema = new Schema({
    email: {type: String, required: true, index: true},
    firstName: {type: String, required: true, index: true},
    lastName: {type: String, required: true, index: true},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
});

export default mongoose.model<IGoogleUser>('GoogleUser', googleUserSchema);
