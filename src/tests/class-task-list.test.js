/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/class-task-list.js';

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

    expect(todo.data[1].description).toEqual('Practice');
  });
  it('Adding todo to return details property', () => {
    const todo = new TaskList();
    todo.addTask('Sleep', false, 2);

    expect(todo.data[2].description).toBe('Sleep');
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

    expect(todo.data[4].description).toEqual('Read');
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
    expect(todo.data[4].description).toEqual('Lunch');
  });
});

// testing for editing todo

describe('Test for Edit Todo', () => {
    it('Editing todo to return new details', () => {
      const todo = new TaskList();
      todo.addTask('Walking', false, 5);
      todo.data[5].description = 'Brushing';
  
      expect(todo.data[5].description).toMatch('Brushing');
    });
    it('Editing todo to return new details', () => {
      const todo = new TaskList();
      todo.data[0].description = 'Praying';
  
      expect(todo.data[0].description).toMatch('Praying');
    });
  
    it('Editing todo to return new index property', () => {
      const todo = new TaskList();
      todo.data[1].id = 3;
  
      expect(todo.data[1].id).toEqual(3);
    });
  });

// Testing for updating todo booleans

describe('Test for Upadate Todo Booleans', () => {
  it('Updating todo to return boolean true', () => {
    const todo = new TaskList();
    todo.addTask('Watching', true, 6);
    todo.data[6].completed = true;

    expect(todo.data[6].completed).toBe(true);
  });
  it('Updating todo to return boolean false', () => {
    const todo = new TaskList();
    todo.data[5].completed = false;

    expect(todo.data[5].completed).toEqual(false);
  });
});

// Testing for clearing all completed todo.
describe('Test for Clear All Completed Todo', () => {
  it('Test for remove todo with boolean true', () => {
    const todo = new TaskList();
    todo.addTask('Jogging', false, 8);
    todo.clearCompleted();

    expect(todo.data.length).toBe(5);
  });
  it('Test for remove todo with boolean true', () => {
    const todo = new TaskList();
    todo.addTask('Breakfast', true, 9);
    todo.addTask('Laundry', true, 10);
    todo.removeTask(4);
    todo.addTask('Travelling', false, 11);
    todo.clearCompleted();

    expect(todo.data.length).toBe(5);
  });
  it('Test for remove todo with boolean true', () => {
    const todo = new TaskList();
    todo.addTask('Rafting', true, 12);
    todo.removeTask(10);
    todo.addTask('Cycling', true, 13);
    todo.removeTask(12);
    todo.clearCompleted();

    expect(todo.data.length).toBe(5);
  });
});

