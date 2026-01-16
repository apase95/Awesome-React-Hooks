import { useEffect, useRef } from "react";

function useInterval(
    callback: () => void, 
    delay: number | null,
    immediate = false,
) {
    const savedCallback = useRef<(() => void) | null>(null);
    
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        if (delay == null || delay < 0) return ;
        if (immediate) {
            savedCallback.current?.();
        }
        const id = setInterval(() => {
            savedCallback.current?.();
        }, delay);

        return () => clearInterval(id);
    }, [delay, immediate])
}

export default useInterval;