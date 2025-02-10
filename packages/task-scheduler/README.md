# task-scheduler

Question: Design and Implement a Task Scheduler

You are tasked with designing and implementing a task scheduler that can handle multiple tasks with different priorities and deadlines. The scheduler should be able to execute tasks in the correct order based on their priority and ensure that no task misses its deadline.

Requirements:
Each task has:
A unique identifier (e.g., task_id).
A priority level (higher numbers indicate higher priority).
A deadline (time by which the task must be executed).
A duration (time it takes to complete the task).

Tasks arrive dynamically at different times, and the scheduler must decide the order of execution in real-time.

If two tasks have the same priority, the one with the earlier deadline should be executed first.

If a task cannot be completed before its deadline, it should be marked as "missed."

The scheduler should provide the following functionalities:
Add a new task.
Execute the next task based on priority and deadline.
List all pending tasks.
Report missed tasks.

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
