import { Start } from '../src/start';

describe('Start', () => {
  const start = new Start();

  it('show be defined', () => {
    expect(start).toBeDefined();
  });
});
