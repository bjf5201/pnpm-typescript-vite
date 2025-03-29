export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  pow(a: number, b: number): number {
    return Math.pow(a, b);
  }

  sqrt(a: number): number {
    return Math.sqrt(a);
  }

  log(a: number): number {
    return Math.log(a);
  }
}
