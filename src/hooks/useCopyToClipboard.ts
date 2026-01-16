import { useCallback, useEffect, useRef, useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

function useCopyToClipboard(timeout = 2000): [CopiedValue, CopyFn] {
    const [copiedText, setCopiedText] = useState<CopiedValue>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    const copy = useCallback<CopyFn>(async (text) => {
        if (typeof navigator === "undefined" || !navigator.clipboard) {
            console.warn("Clipboard not supported");
            return false ;
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setCopiedText(null)
            }, timeout);
        
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setCopiedText(null);
            return false;
        }
    }, [timeout]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return [copiedText, copy];
}

export default useCopyToClipboard;