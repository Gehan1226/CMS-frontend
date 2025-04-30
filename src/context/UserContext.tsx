import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { getUserDetails } from "../api/auth";
import { UserResponse } from "../types/auth";

type UserContextType = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user", error);
        setUser(null); 
      }
    };

    fetchUser();
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};