export class User {
  constructor(
    public id: number,
    public email: string, 
    public category: string, 
    public password: string,
    public lastName: string,
    public firstName: string) {}
}