export class MyError extends Error {
    public SUPER_NAME: string;
    constructor(message: string) {
        super(message);
        this.SUPER_NAME = 'TOM';
    }
}
