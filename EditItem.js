import { useState } from 'react';
import axios from 'axios';

function EditItem({ item, onUpdate }) {
  const [formData, setFormData] = useState(item);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:5000/api/items/${item._id}`, formData);
    onUpdate();
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="category" value={formData.category} onChange={handleChange} />
      <input name="location" value={formData.location} onChange={handleChange} />
      <input name="price" value={formData.price} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onUpdate}>Cancel</button>
    </div>
  );
}

export default EditItem;
