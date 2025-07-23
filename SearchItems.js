import { useState } from 'react';
import axios from 'axios';
import EditItem from './EditItem';

function SearchItems() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:5000/api/items?keyword=${query}`);
    setResults(res.data);
  };

  const refreshList = () => {
    handleSearch();
    setSelectedItem(null);
  };

  return (
    <div>
      <h2>Search Products/Buyers</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => { setQuery(''); setResults([]); }}>Clear</button>

      {selectedItem ? (
        <EditItem item={selectedItem} onUpdate={refreshList} />
      ) : (
        results.map(item => (
          <div key={item._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{item.name}</h3>
            <p>{item.category} | {item.location} | ${item.price}</p>
            <button onClick={() => setSelectedItem(item)}>Edit</button>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchItems;
