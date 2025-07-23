import express from 'express';
import Item from '../models/Item.js';
const router = express.Router();

// Search Items
router.get('/', async (req, res) => {
  const { keyword, category, location, minPrice, maxPrice } = req.query;
  let filter = {};

  if (keyword) filter.name = { $regex: keyword, $options: 'i' };
  if (category) filter.category = category;
  if (location) filter.location = location;
  if (minPrice && maxPrice) filter.price = { $gte: minPrice, $lte: maxPrice };

  try {
    const items = await Item.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err });
  }
});

// Update Item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Update successful', data: updatedItem });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err });
  }
});

export default router;
