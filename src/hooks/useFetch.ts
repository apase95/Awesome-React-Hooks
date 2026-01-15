import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

function useFetch<T>(url: string): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!url) return ;
        
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const json = (await response.json()) as T;
                setData(json);
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    setError(error as Error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [url]);

    return { data, loading, error};
}

export default useFetch;