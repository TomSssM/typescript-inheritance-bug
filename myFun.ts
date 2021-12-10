import { MyError } from './errors';

export function myFun() {
    try {
        throw new MyError('test 1');
    } catch (e) {
        console.log('e instanceof MyError:');
        console.log(e instanceof MyError);
        return e instanceof MyError;
    }
}

if (require.main === module) {
    myFun();
}
