import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import * as TaskActions from './task.actions';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, (state) => ({ ...state, loading: true, error: null })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks, loading: false })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(TaskActions.createTask, (state) => ({ ...state, loading: true, error: null })),
  on(TaskActions.createTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task], loading: false })),
  on(TaskActions.createTaskFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
