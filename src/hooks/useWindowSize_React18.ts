import { useSyncExternalStore } from "react";

interface WindowSizeProps {
    width: number;
    height: number;
};

function useWindowSize(): WindowSizeProps {
    const subscribe = (callback: () => void) => {
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    };

    const getSnapshot = () => ({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const getServerSnapshot = () => ({
        width: 0,
        height: 0,
    });

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useWindowSize;
