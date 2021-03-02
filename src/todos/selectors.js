import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

// Higher order selectors (using reselect - important feature: it does not compute if state has not changed)
export const getIncompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => todo.isCompleted),
);