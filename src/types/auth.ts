export type User = {
  userName: string;
  password: string;
  confirmPassword?: string;
};

export type UserResponse = {
  id: number;
  userName: string;
}