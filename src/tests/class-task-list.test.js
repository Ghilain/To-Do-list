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

describe('Editing a todo item when its clicked', () => {
  test('edit a todo item when its clicked', () => {
    const todo = new TaskList();
    // eslint-disable-next-line consistent-return
    const rename = (taskID, newTask) => {
      const obj = this.data;
      if (obj.id === taskID) {
        return { ...obj, description: newTask };
      }
      expect(obj).toBe(todo.newTask);
    };
  });
});