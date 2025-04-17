import ListService from './ListService';
import { act } from 'react';

describe('ListService', () => {
  const TEST_LIST = 'testList';
  
  beforeEach(async () => {
    // Clear any existing items from the test list
    const list = await ListService.getList(TEST_LIST);
    for (const item of list) {
      await ListService.deleteItem(TEST_LIST, item.id);
    }
  });

  describe('getList', () => {
    it('should return an empty array for a non-existent list', async () => {
      const result = await ListService.getList('nonExistentList');
      expect(result).toEqual([]);
    });
  });

  describe('addItem', () => {
    it('should add an item to the list', async () => {
      let result;
      let text;
      await act( async () => {
        text = 'Test item';
        result = await ListService.addItem(TEST_LIST, text);
      });
      
      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        text,
        completed: false,
      });
      expect(result[0].id).toBeDefined();
    });
  });

  describe('updateItem', () => {
    it('should update an existing item', async () => {
      let list;
      let result;
      let updatedItem;
      await act( async () => {
        // Add an item first
        list = await ListService.addItem(TEST_LIST, 'Test item');
        const item = list[0];

        // Update the item
        updatedItem = { ...item, completed: true };
        result = await ListService.updateItem(TEST_LIST, updatedItem);
      })

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(updatedItem);
    });

    it('should not modify other items when updating', async () => {
      let result;
      let originalSecondItem;
      await act( async () => {
        // Add two items
        await ListService.addItem(TEST_LIST, 'Item 1');
        await new Promise(resolve => setTimeout(resolve, 10));
        const list = await ListService.addItem(TEST_LIST, 'Item 2');
        originalSecondItem = list[1];

        // Update the first item
        const updatedItem = { ...list[0], completed: true };
        result = await ListService.updateItem(TEST_LIST, updatedItem);
      });
      
      expect(result).toHaveLength(2);
      expect(result[1]).toEqual(originalSecondItem);
    });
  });

  describe('deleteItem', () => {
    it('should remove an item from the list', async () => {
      let list;
      let result;
      await act( async () => {
        // Add an item first
        list = await ListService.addItem(TEST_LIST, 'Test item');
        const itemId = list[0].id;

        // Delete the item
        result = await ListService.deleteItem(TEST_LIST, itemId);
      });

      expect(result).toHaveLength(0);
    });

    it('should only remove the specified item', async () => {
      let result;
      await act( async () => {
        // Add two items
        await ListService.addItem(TEST_LIST, 'Item 1');
        // Add delay to ensure different IDs
        await new Promise(resolve => setTimeout(resolve, 10));
        const list = await ListService.addItem(TEST_LIST, 'Item 2');
        const firstItemId = list[0].id;

        // Delete the first item
        result = await ListService.deleteItem(TEST_LIST, firstItemId);
      });

      
      expect(result).toHaveLength(1);
      expect(result[0].text).toBe('Item 2');
    });
  });
});
