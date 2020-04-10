export const getMapToggleTask = (task, id) => {
    if(task.id === id) {
        task = {...task};
        task.doneAt = task.doneAt ? null : new Date();
    }
    return task;
}

export const ordenarTasks = (a,b) => {
    if (a.estimateAt < b.estimateAt)
       return -1;
    if (a.estimateAt > b.estimateAt)
      return 1;
    return 0;
  }