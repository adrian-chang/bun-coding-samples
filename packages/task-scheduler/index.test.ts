import { TaskScheduler } from "./index";
import { test, expect } from "bun:test";

test("TaskScheduler1", () => {
  const scheduler = new TaskScheduler();
  scheduler.addTask({ task_id: 1, priority: 5, deadline: 10, duration: 3 }, 0);
  scheduler.executeTask(0);
  scheduler.addTask({ task_id: 2, priority: 3, deadline: 8, duration: 2 }, 1);
  scheduler.executeTask(1);
  scheduler.addTask({ task_id: 3, priority: 5, deadline: 12, duration: 4 }, 2);
  scheduler.executeTask(2);
  for (let i = 3; i < 10; i++) {
    scheduler.displayPendingTasks();
    scheduler.executeTask(i);
  }
});