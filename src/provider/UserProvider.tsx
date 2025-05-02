import React, { useMemo } from "react";
import { getUserDetails } from "../api/auth";
import { UserContext } from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetails,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const value = useMemo(
    () => ({ user: user ?? null, isLoading }),
    [user, isLoading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
