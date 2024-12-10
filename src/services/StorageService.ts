import { useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

const STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_APP_KEY;
const JWT_ISS = import.meta.env.VITE_JWT_ISS;

interface CustomJwtPayload extends JwtPayload {
  iss?: string;
}

export const StorageService = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY),
  );

  const saveToken = (newToken: string): void => {
    localStorage.setItem(STORAGE_KEY, newToken);
    setToken(newToken);
  };

  const removeToken = (): void => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
  };

  const validateToken = (token: string) => {
    try {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        console.error("Expired token");
        return false;
      }

      if (decodedToken.iss !== JWT_ISS) {
        console.error("Invalid issuer");
        return false;
      }

      return true;
    } catch (error) {
      console.error("Expired token", error);
      return false;
    }
  };

  return { token, saveToken, removeToken, validateToken };
};
