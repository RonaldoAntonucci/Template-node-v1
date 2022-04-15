import { test } from './test';

/* eslint-disable no-console */
export class Start {
  public async start() {
    test();
    console.log('Start Template!!');
  }
}

const start = new Start();
start.start();
