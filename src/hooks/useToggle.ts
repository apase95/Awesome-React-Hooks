import { useCallback, useState } from "react";

function useToggle(initialState: boolean = false) {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback(() => setState(state => !state), []);
    const setOn = useCallback(() => setState(true), []);
    const setOff = useCallback(() => setState(false), []);
    const reset = useCallback(() => setState(initialState), [initialState]);

    return { state, toggle, setOn, setOff, reset};
}

export default useToggle;