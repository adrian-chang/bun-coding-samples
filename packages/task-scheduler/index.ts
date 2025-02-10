
export type Task = {
  task_id: number;
  priority: number;
  deadline: number;
  duration: number;
};


// first priority always comes first
// if priority is the same, then the task with the lowest deadline comes first assuming duration is achivevable
// else attempt to schedule the other task 
// either way, if miss miss

export class TaskScheduler {
  private pendingTasks: Task[];
  private missedTasks: Task[];
  private currentTask: Task | null;

  constructor() {
    this.pendingTasks = [];
    this.missedTasks = [];
    this.currentTask = null;
  }

  addTask(task: Task, time: number) {
    this.pendingTasks.push(task);
    this.pendingTasks.sort((first: Task, second: Task) => {
        const priorityDiff = second.priority - first.priority;
        if (priorityDiff !== 0) {
            return priorityDiff;
        }
        //console.log(first, second);
        // smaller duration and still achievable (first)
        if (first.duration < second.duration && first.deadline >= time + first.duration) {
            return -1;
        }
        // smaller duration and still achievable (second)
        if (second.duration < first.duration && second.deadline >= time + second.duration) {
          //  console.log("second");
            return 1;
        }
        // if both are the same, then the one with the lowest deadline comes first (or the same)
        return second.deadline - first.deadline;
    });
  }

  executeTask(time: number) {
    // current task is done
    if (this.currentTask && this.currentTask.duration === 1) {
        this.currentTask = null;
    // decrement duration
    } else if (this.currentTask) {
        this.currentTask.duration--;
    // try and get the next task
    } else {
        while (true) {
            if (this.pendingTasks.length === 0) {
                return;
            }
            let nextTask = this.pendingTasks.shift();
            if (nextTask && time + nextTask.duration <= nextTask.deadline) {
                this.currentTask = nextTask;
                this.currentTask.duration--;
                return;
            } else if(nextTask) {
                this.missedTasks.push(nextTask);
            }
        }
    }
  }

  displayPendingTasks() {
    this.pendingTasks.forEach((task) => {
      console.log(`Pending task: ${task.task_id}`);
    });
  }

  displayMissedTasks() {
    this.missedTasks.forEach((task) => {
      console.log(`Missed task: ${task.task_id}`);
    });
  }

}

