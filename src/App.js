// App.js (updated to match attractive design)
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState, useEffect } from 'react';
import { getLocalData, setLocalData } from './apiRequest';

function App() {
  const STORAGE_KEY = 'todoListApp';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedItems = getLocalData(STORAGE_KEY);
    setItems(storedItems);
  }, []);

  useEffect(() => {
    setLocalData(STORAGE_KEY, items);
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const updatedItems = [...items, myNewItem];
    setItems(updatedItems);
  };

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    addItem(newItem.trim());
    setNewItem('');
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Header title="To Do List" />
      <main style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
