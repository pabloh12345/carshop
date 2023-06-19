
import Addcliente from './Addcliente.js';
import AddTask from './AddTask.js';
import AddServicio from './AddServicio.js';
//import TaskListFilter from './TaskListFilter.js';
import TaskList from './TaskList.js';
import TasksAppContext from './TasksContext.js';
import './App.css';

export default function TaskApp() {
  return (
    <TasksAppContext>
      <h1 class=''>Car Shop </h1>
      <Addcliente />
      <AddTask />
      <AddServicio />
      <TaskList />
    </TasksAppContext>
  );
}