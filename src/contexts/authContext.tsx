import { createContext, ReactNode, useState } from "react";
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
  registerCurrentUser: (data: User) => void;
  currentUser: User | null;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { token } = StorageService();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const registerCurrentUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        registerCurrentUser,
        currentUser,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
