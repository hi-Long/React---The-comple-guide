import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const makeRequest = useCallback(async (requestConfig, applyData) => {
        const { url, method, data } = requestConfig;
        setIsLoading(true);
        setError(null);
        try {
            console.log(method, url, data)
            const response = await axios({
                method: method,
                url: url,
                data: data
            });


            if (response.status !== 200) {
                throw new Error('Request failed!');
            } else {
                applyData(response.data)
            }
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [])

    return { isLoading, error, makeRequest }
}

export default useHttp