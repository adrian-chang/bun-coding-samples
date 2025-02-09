// check if message has been printed before
// if it has not, return true
// if it has
// remove all messages that are older than 30 seconds from timestamp
// check if the number of messages is greater than 10
// if it is, return false
// if it is not, return true

// o(n) time based on the number of messages recieved in total
// o(n) space storing all messages in the map

export class Logger {
  private messages: Map<string, number[]>;
  private window: number;
  private maxMessages: number;

  constructor() {
    this.messages = new Map();
    this.window = 30;
    this.maxMessages = 10;
  }

  shouldPrint(message: string, timestamp: number): boolean {
    if (!this.messages.has(message)) {
      this.messages.set(message, [timestamp]);
      return true;
    } 

    const messages = this.messages.get(message);
    if (!messages) {
      return false;
    }
    messages.push(timestamp);
    while (messages[0] < timestamp - this.window) {
      messages.shift();
    }
    if (messages.length > this.maxMessages) {
      return false;
    }
    return true;
  }

}
