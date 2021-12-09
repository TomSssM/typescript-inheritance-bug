import { myFun } from '../myFun';

describe('myFun', () => {
    it('works', async () => {
        const out = await myFun();
        expect(out).toBe(true);
    });
});
