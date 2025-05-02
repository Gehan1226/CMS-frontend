import { Booking, BookingFormValues } from "../types/bookings";

export const getBookingsByUserId = async (
  userId: number
): Promise<Booking[]> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/bookings/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse?.errorMessage ?? "Failed to fetch bookings");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during fetching bookings");
    }
  }
};

export const createBooking = async (
  data: BookingFormValues
): Promise<string> => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during creating bookings");
    }
  }
};

export const deleteBooking = async (id: number): Promise<string> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during deleting bookings");
    }
  }
};

export const updateBooking = async (
  id: number,
  data: BookingFormValues
): Promise<string> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/bookings/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during updating bookings");
    }
  }
};
