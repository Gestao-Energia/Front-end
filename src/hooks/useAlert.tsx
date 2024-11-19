import { Alert, AlertColor, AlertTitle, Collapse, Snackbar, SnackbarCloseReason } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface AlertType {
    title: "Sucesso" | "Informação" | "Alerta" | "Erro"
    message: string
    severity: AlertColor
}

interface alertContextType {
    showAlert: ({ message, severity, title }: AlertType) => void;
}

export const AlertContext = createContext({} as alertContextType)

interface AlertProviderProps {
    children: ReactNode
}

export function AlertProvider({ children }: AlertProviderProps) {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('Informação');
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<AlertColor>('info');

    const showAlert = ({ title, message, severity = 'info' }: AlertType) => {
        setTitle(title)
        setMessage(message);
        setSeverity(severity);
        setOpen(true)
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <AlertContext.Provider
            value={{ showAlert }}
        >
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </AlertContext.Provider>
    )
}