import { createContext, ReactNode } from "react";
import { StorageService } from "../services/StorageService";

export interface User {
  name: string;
  email: string;
  telephone: string;
  username: string;
  role: UserRole;
  profileImageUrl: string;
}

export interface UserWithToken extends User {
  token: string;
}

export enum UserRole {
  Administrator = "ADMIN",
  Manager = "MANAGER",
  Common = "COMMON",
}
interface AuthContextType {
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getToken } = StorageService();
  const token = getToken();
  return (
    <AuthContext.Provider
      value={{
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
