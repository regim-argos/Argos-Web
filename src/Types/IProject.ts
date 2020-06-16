export default interface IProject {
  id: number;
  name: string;
  members: IMember[];
}

export interface IMember {
  role: string;
  userId: number;
  email: string;
}
