import { model, Schema } from 'mongoose';

const admiralsSchema = new Schema(
  {
    name: { type: String, require: true },
    imgAdmiral: { type: String, require: true },
    imgAdmiralForm: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const admiralsCollection = model('admirals', admiralsSchema);
