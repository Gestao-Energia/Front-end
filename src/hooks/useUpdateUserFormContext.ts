import { useContext } from "react";
import { UpdateUserFormContext } from "../contexts/updateUserContext";

export const useUpdateUserFormContext = () => {
  const context = useContext(UpdateUserFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
