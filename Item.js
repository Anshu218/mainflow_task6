import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: String,
  price: Number,
  email: String,
  role: { type: String, enum: ['admin', 'seller', 'buyer'], default: 'seller' }
});

export default mongoose.model('Item', itemSchema);
