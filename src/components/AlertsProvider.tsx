import React, { ReactNode, createContext, useCallback, useMemo } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

type Props = {
    children: React.ReactNode;
};

type ContextProps = {
    showAlert: (text: string) => void;
};

type AlertState = {
    open: boolean;
    text?: ReactNode;
};

export const AlertContext = createContext<ContextProps>({
    showAlert: () => null
});

function AlertProvider({ children }: Props) {
    const [state, setState] = React.useState<AlertState>();

    const showAlert = useCallback((text: string) => {
        setState({ open: true, text });
    }, []);

    const closeAlert = useCallback(() => {
        setState({ open: false });
    }, []);

    const contextValue = useMemo(() => ({ showAlert }), [showAlert]);

    return (
        <AlertContext.Provider value={contextValue}>
            {state?.open && (
                <Snackbar
                    autoHideDuration={5000}
                    open={state.open}
                    onClose={closeAlert}
                >
                    <Alert onClose={closeAlert} severity="error">
                        {state.text}
                    </Alert>
                </Snackbar>
            )}
            {children}
        </AlertContext.Provider>
    );
}

export default AlertProvider;
