import { jwtDecode } from "jwt-decode"; // ✅ correct

interface JwtPayload {
  sub: string;
  iat?: number;
  exp?: number;
  [key: string]: any;
}

export const extractSubject = (token: string): string | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.sub ?? null;
  } catch (error) {
    console.error("Invalid JWT token", error);
    return null;
  }
};

export const getAccessToken = (): string | null => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="));
  return cookie ? cookie.split("=")[1] : null;
};