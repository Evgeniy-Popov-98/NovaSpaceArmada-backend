import { model, Schema } from 'mongoose';

const admiralsSchema = new Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const admiralsCollection = model('admirals', admiralsSchema);
