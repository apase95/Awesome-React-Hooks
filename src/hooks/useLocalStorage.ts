import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    
    const readValue = (): T => {
        if (typeof window === "undefined") return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);
    useEffect(() => {
        setStoredValue(readValue());
    }, [key]);

    const setValue = (value: T | ((val : T) => T)) => {
        if (typeof window === "undefined") return;
        try {
            const valueToStore = 
                value instanceof Function ? value(storedValue) : value; 
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));    
        } catch (error) {
            console.error({
                message: "Error when set value on local storage", 
                error,
            });
        }
    };

    return [storedValue, setValue] as const;
}

export default useLocalStorage;