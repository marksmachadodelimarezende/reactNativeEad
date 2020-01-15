const getMapToggleTask = task => {
    if(task.id === id) {
        task = {...task};
        task.doneAt = task.doneAt ? null : new Date();
    }
    return task;
}
