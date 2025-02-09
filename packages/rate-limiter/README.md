Problem: Rate-Limited Logger
Design a logging system that rate-limits messages. The logger should enforce the following rule:
If the same message is printed more than 10 times in a 30-second window, all further occurrences are ignored until the window resets. (Sliding window)

Requirements:

Implement a class Logger with two methods:

constructor(): Initializes the logger.

shouldPrint(message: str, timestamp: int) -> bool: Returns True if the message should be printed, False otherwise.

The decision must account for all previous timestamps, not just the last 30 seconds from the current timestamp.

Optimize for scenarios where the same message is sent repeatedly in bursts.

Example:
```
logger = Logger()
logger.shouldPrint("hello", 1)    # returns True (1st call)
logger.shouldPrint("hello", 2)    # returns True (2nd call)
...
logger.shouldPrint("hello", 10)   # returns True (10th call)
logger.shouldPrint("hello", 11)   # returns False (11th call within 1-11 → <30 sec window)
logger.shouldPrint("hello", 31)   # returns True (window 1-31: only 10-31 are in last 30 sec)
```
This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
