import { Booking, BookingFormValues } from "../types/bookings";
import { getAccessToken } from "../util/cookie";

export const getBookingsByUserId = async (
  userId: number
): Promise<Booking[]> => {
  try {
    const accessToken = getAccessToken();

    if (!accessToken) {
      throw new Error("Access token not found in cookies");
    }

    const response = await fetch(
      `http://localhost:8080/api/v1/bookings/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during fetching bookings");
    }
  }
};

export const createBooking = async (data: BookingFormValues): Promise<string> => {
  try {
    const accessToken = getAccessToken();

    if (!accessToken) {
      throw new Error("Access token not found in cookies");
    }

    const response = await fetch(`http://localhost:8080/api/v1/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

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
      throw new Error("An unknown error occurred during fetching bookings");
    }
  }
};
