import { useEffect, useRef, useState } from "react";

interface WindowSizeProps {
    width: number;
    height: number;
};

function useWindowSize(): WindowSizeProps {
    const [size, setSize] = useState<WindowSizeProps>(() => ({
        width: typeof window === "undefined" ? 0 : window.innerWidth,
        height: typeof window === "undefined" ? 0 : window.innerHeight,
    }));

    const frame = useRef<number | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return ;
        const onResize = () => {
            if (frame.current) return;

            frame.current = window.requestAnimationFrame(() => {
                frame.current = null;
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            })
        };

        window.addEventListener("resize", onResize);

        return () => {
            if (frame.current) {
                cancelAnimationFrame(frame.current);
            } window.removeEventListener("resize", onResize);
        } 
    }, [])

    return size;
}

export default useWindowSize;