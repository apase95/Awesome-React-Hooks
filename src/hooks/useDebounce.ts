import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        if (delay <= 0) {
            setDebounceValue(value);
            return ;
        }
        const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
            setDebounceValue(prev =>
                Object.is(prev, value) ? prev : value
            );
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);
    
    return debounceValue;
};

export default useDebounce;