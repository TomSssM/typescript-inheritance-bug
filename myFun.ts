class MyError extends Error {
  public SUPER_NAME: string;
  constructor(message: string) {
    super(message);
    this.SUPER_NAME = 'TOM';
  }
}

export function myFun() {
    const e = new MyError('test');
    console.log(e instanceof MyError);
}

if (require.main === module) {
    myFun();
}
