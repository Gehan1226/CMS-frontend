import React, { useMemo } from "react";
import { getUserDetails } from "../api/auth";
import { UserContext } from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../main";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetails,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const fetchUser = () => {
    queryClient.refetchQueries(["user"]);
  };

  const removeUser = () => {
    queryClient.setQueryData(["user"], null);
  };

  const value = useMemo(
    () => ({ user: user ?? null, fetchUser, removeUser, isLoading }),
    [user, isLoading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
