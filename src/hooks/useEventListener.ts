import { useEffect, useRef } from "react";

function useEventListener(
    eventName: string,
    handler: EventListener,
    element?: EventTarget | null,
) {
    const savedHandler = useRef<(event: Event) => void>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const target = element ?? (typeof window !== "undefined" ? window : null);
        if (!target?.addEventListener) return;

        const eventListener = (event: Event) => {
            savedHandler.current?.(event);
        };
        target.addEventListener(eventName, eventListener);

        return () => {
            target.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

export default useEventListener;