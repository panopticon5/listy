const lists = {
  toDoList: [
    { id: 1, text: 'Buy Sunpocrisy ticket', completed: false },
    { id: 2, text: 'Watch Mindhunter', completed: true },
  ],
};

const ListService = {
  getList: (listName) => {
    return Promise.resolve(lists[listName] || []);
  },

  addItem: (listName, text) => {
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    lists[listName] = [...(lists[listName] || []), newItem];
    return Promise.resolve(lists[listName]);
  },

  updateItem: (listName, updatedItem) => {
    lists[listName] = lists[listName].map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    return Promise.resolve(lists[listName]);
  },

  deleteItem: (listName, itemId) => {
    lists[listName] = lists[listName].filter((item) => item.id !== itemId);
    return Promise.resolve(lists[listName]);
  },
};

export default ListService;