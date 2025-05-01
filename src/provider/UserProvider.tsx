import React, { useState, useEffect, useMemo } from "react";
import { getUserDetails } from "../api/auth";
import { UserResponse } from "../types/auth";
import { UserContext } from "../context/UserContext";

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
