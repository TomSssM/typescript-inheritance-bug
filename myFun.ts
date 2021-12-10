class MyError extends Error {
  public SUPER_NAME: string;
  constructor(message: string) {
    super(message);
    this.SUPER_NAME = 'TOM';
    Object.setPrototypeOf(this, MyError.prototype);
  }
}

class MyError2 extends MyError {
    public SUPER_NAME2: string;
    constructor(message: string) {
        super(message);
        this.SUPER_NAME2 = 'TOM2';
        Object.setPrototypeOf(this, MyError2.prototype);
    }
}

export function myFun() {
    const e = new MyError2('test');

    console.log('e instanceof MyError');
    console.log(e instanceof MyError);

    console.log('e instanceof MyError2');
    console.log(e instanceof MyError2);
}

if (require.main === module) {
    myFun();
}
