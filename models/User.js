import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId, //bookmarks will store the id of the properties we want to bookmark
        ref: 'Property', //this is a model from which we are getting the id
      },
    ],
  },
  {
    timestamps: true, //this will automatically add "created at" and "updated at" fields
  }
);

const User = models.User || model('User', UserSchema);

export default User;
