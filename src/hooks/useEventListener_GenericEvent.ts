import { useEffect, useRef } from "react";

function useEventListener<
    K extends keyof WindowEventMap
>(
    eventName: K,
    handler: (event: WindowEventMap[K]) => void,
    element?: Window
): void {
    const savedHandler = useRef<typeof handler>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const target = element ?? (typeof window !== "undefined" ? window : null);
        if (!target) return;

        const listener = (event: Event) => {
            savedHandler.current?.(event as WindowEventMap[K]);
        };

        target.addEventListener(eventName, listener);

        return () => target.removeEventListener(eventName, listener);
    }, [eventName, element]);
}

export default useEventListener;
