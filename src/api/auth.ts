import { User, UserResponse } from "../types/auth";

export const userLogin = async (data: User): Promise<string> => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse?.message ?? "Login failed");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during login");
    }
  }
};

export const userSignUp = async (data: User): Promise<string> => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse?.message ?? "Login failed");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during signup");
    }
  }
};

export const getUserDetails = async (): Promise<UserResponse> => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    throw new Error("An unknown error occurred");
  }
};
