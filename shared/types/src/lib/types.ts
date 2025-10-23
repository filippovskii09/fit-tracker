export interface User {
  name: string;
  age: number;
}

export interface School {
  id: number;
  kids: User[];
  title: string;
}

export interface MessageI {
  message: string;
}
