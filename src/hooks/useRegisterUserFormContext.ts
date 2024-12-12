import { useContext } from "react";
import { RegisterUserFormContext } from "../contexts/registerUserContext";

export const useRegisterUserFormContext = () => {
  const context = useContext(RegisterUserFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
