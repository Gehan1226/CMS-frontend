import { createContext } from "react";
import { UserResponse } from "../types/auth";

type UserContextType = {
  user: UserResponse | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
