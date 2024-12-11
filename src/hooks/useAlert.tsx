import { useContext } from "react";
import { AlertContext } from "../contexts/alertContext";

export const useAlert = () => {
  return useContext(AlertContext);
};
