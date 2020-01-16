import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
    const [darkmode, setDarkmode] = useLocalStorage(key, initialValue);

    const toggleMode = e => {
        e.preventDefault();
        setDarkmode(!darkmode);
    };

    useEffect(() => {
        if (darkmode === false) {
            document.querySelector("body").classList.remove('dark-mode');
        }
        if (darkmode === true) {
            document.querySelector("body").classList.toggle("dark-mode");
        }
    }, [darkmode]);
    return [darkmode, toggleMode];
};