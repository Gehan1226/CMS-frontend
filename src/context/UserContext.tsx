import { createContext } from "react";
import { UserResponse } from "../types/auth";

type UserContextType = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
