import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string
    created: Date;
    updated: Date;
}

const userSchema = new Schema({
    email: {type: String, required: true, index: true},
    firstName: {type: String, required: true, index: true},
    lastName: {type: String, required: true, index: true},
    password: {type: String, required: true, index: true},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
});

export default mongoose.model<IUser>('User', userSchema);
