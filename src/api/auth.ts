import { LoginFormInputs } from "../types/auth";

export const userLogin = async (data: LoginFormInputs): Promise<string> => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
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
      throw new Error("An unknown error occurred during login");
    }
  }
};
