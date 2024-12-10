import { createContext, ReactNode, useState, useCallback } from "react";
import { UserRole } from "./registerUserContext";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";
import { StorageService } from "../services/StorageService";
import { useAlert } from "../hooks/useAlert";

export interface User {
  name: string;
  email: string;
  telephone: string;
  username: string;
  role: UserRole;
  profileImageUrl: string;
}
type LoginRequestBody = {
  email: string;
  password: string;
};

interface AuthContextType {
  loginAction: (data: LoginRequestBody) => Promise<void>;
  logoutAction: () => void;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { loginUser, loading, error } = AuthService();
  const { token, saveToken, removeToken } = StorageService();
  const [user, setUser] = useState<User | null>(null);

  const loginAction = useCallback(
    async (data: LoginRequestBody) => {
      const response = await loginUser(data);
      if (response) {
        setUser(response.user);
        await saveToken(response.token);
        showAlert({
          title: "Sucesso",
          message: "Login realisado com sucesso",
          severity: "success",
        });
        navigate("/dashboard");
      } else {
        showAlert({
          title: "Erro",
          message: "Erro ao tentar realizar o login",
          severity: "error",
        });
      }
    },
    [loginUser, navigate, saveToken],
  );

  const logoutAction = useCallback(() => {
    setUser(null);
    removeToken();
    navigate("/login");
  }, [removeToken, navigate]);

  return (
    <AuthContext.Provider
      value={{
        loginAction,
        logoutAction,
        user,
        token,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
