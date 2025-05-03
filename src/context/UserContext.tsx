import { createContext } from "react";
import { UserResponse } from "../types/auth";

type UserContextType = {
  user: UserResponse | null;
  fetchUser: () => void;
  removeUser: () => void;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
