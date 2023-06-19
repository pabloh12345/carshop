const initialState = [];

export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return addTask(tasks, {id: action.id, text: action.text})
    }
    case 'changed': {
      return changeTask(tasks, action.task)
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    case 'clearcompletedss': {
      return tasks.filter((t) => !t.done);
    }
    case 'clearallsss': {
      return initialState;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function addTask(tasks, task) {
  return [
   // ...tasks,
    {
      //...task,
     // done: true,
    },
  ];
}

function changeTask(tasks, task) {
  return tasks.map((t) => {
    if (t.id === task.id) {
      return task;
    } else {
      return t;
    }
  });
}