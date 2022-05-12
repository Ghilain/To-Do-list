/**
 * @jest-environment jsdom
 */

 import TaskList from './class-task-list.js';

 // Testing Add Item Todo

describe('Testing Add Item', () => {
    test('Adding todo to array not to be null', () => {
      const todo = new TaskList();
      todo.addTask('WakeUp', false, 0);
  
      expect(todo.length).not.toBeNull();
    });
    it('Adding new task', () => {
      const todo = new TaskList();
      todo.addTask('Practice', false, 1);
  
      expect(todo.data[1].task).toEqual('Practice');
    });
    it('Adding todo to return details property', () => {
      const todo = new TaskList();
      todo.addTask('Sleep', false, 2);
  
      expect(todo.data[2].task).toBe('Sleep');
    });
    it('Adding todo to return boolean', () => {
      const todo = new TaskList();
      todo.addTask('Cook', true, 3);
    });
    it('Adding todo to return index', () => {
      const todo = new TaskList();
      todo.addTask('Singing', false, 4);
  
      expect(todo.data[4].id - 1).toEqual(4);
    });
  });

  // Testing Remove Item Todo

describe('Testing Remove Item', () => {
    it('Removing todo from array to be null', () => {
      const todo = new TaskList();
      todo.addTask('Drive', false, 5);
      todo.removeTask(5);
  
      expect(todo[5]).toBeUndefined();
    });
    it('Removing todo from a multiple added todos which returns details', () => {
      const todo = new TaskList();
      todo.addTask('Read', false, 4);
      todo.removeTask(5);
  
      expect(todo.data[4].details).toEqual('Read');
    });
    it('Removing  todo from a multiple added todos which return length', () => {
      const todo = new TaskList();
      todo.addTask('Pray', false, 5);
      todo.addTask('Lunch', false, 6);
      todo.removeTask(3);
  
      expect(todo.data).toHaveLength(6);
    });
    it('remove', () => {
      const todo = new TaskList();
      todo.removeTask(4);
      expect(todo.data[4].details).toEqual('Lunch');
    });
  });
  // testing for editing todo

describe('Test for Edit Todo', () => {
    it('Editing todo to return new details', () => {
      const todo = new TaskList();
      todo.addTask('Walking', false, 5);
      todo.data[5].task = 'Brushing';
  
      expect(todo.data[5].task).toMatch('Brushing');
    });
    it('Editing todo to return new details', () => {
      const todo = new TaskList();
      todo.data[0].task = 'Praying';
  
      expect(todo.data[0].task).toMatch('Praying');
    });
  
    it('Editing todo to return new index property', () => {
      const todo = new TaskList();
      todo.data[1].index = 3;
  
      expect(todo.data[1].index).toEqual(3);
    });
  });
  