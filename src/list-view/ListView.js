import React, { useState, useEffect } from 'react';
import ListService from './ListService';
import { ListContainer, AddItem, ItemList, ListItemStyle } from './styles';

function ListView() {
  const [listItems, setListItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const listName = 'sharedList';

  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    ListService.getList(listName).then(setListItems);
  };

  const addItem = () => {
    if (newItemText.trim()) {
      ListService.addItem(listName, newItemText).then(() => {
        setNewItemText('');
        loadList();
      });
    }
  };

  const updateItem = (updatedItem) => {
    ListService.updateItem(listName, updatedItem).then(loadList);
  };

  const deleteItem = (itemId) => {
    ListService.deleteItem(listName, itemId).then(loadList);
  };

  const shareList = () => {
    const listUrl = `${window.location.origin}/list/${listName}`;
    navigator.clipboard.writeText(listUrl).then(() => {
      alert('List link copied to clipboard!');
    }).catch((err) => {
      console.error('Could not copy text: ', err);
      alert('Could not copy link.');
    });
  };

  return (
    <ListContainer>
      <h2>Shared List</h2>

      <AddItem>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add</button>
      </AddItem>

      <ItemList>
        {listItems.map((item) => (
          <ListItemStyle key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => updateItem({ ...item, completed: e.target.checked })}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none', color: item.completed ? '#888' : 'black' }}>
              {item.text}
            </span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </ListItemStyle>
        ))}
      </ItemList>
      <button onClick={shareList}>Share List</button>
    </ListContainer>
  );
}

export default ListView;