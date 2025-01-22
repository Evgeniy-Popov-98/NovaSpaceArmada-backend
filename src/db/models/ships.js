import { model, Schema } from 'mongoose';

const shipsSchema = new Schema(
  {
    name: { type: String, require: true },
    type: { type: String, require: true },
    rating: { type: String, require: true },
    img: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const shipsCollection = model('ships', shipsSchema);
