import { useCallback, useRef, useState } from "react";

function useHover<T extends HTMLElement>(): [(node: T | null) => void, boolean] {
    const [isHovered, setIsHovered] = useState(false);
    const nodeRef = useRef<T>(null);

    const callbackRef = useCallback((node: T | null) => {
        if (nodeRef.current) {
            nodeRef.current.removeEventListener("mouseover", onEnter);
            nodeRef.current.removeEventListener("mouseout", onLeave);
        } 
        if (node) {
            node.addEventListener("mouseover", onEnter);
            node.addEventListener("mouseout", onLeave);
        }
        nodeRef.current = node;
    }, []);

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    
    return [callbackRef, isHovered];
}

export default useHover;