import {useState, useCallback} from 'react';
import axios from "axios";

const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, processData = (data) => {
        return;
    }) => {
        if (!['get', 'post', 'put', 'update', 'common', 'delete', 'head', 'patch'].includes(requestConfig.method.toLowerCase())) throw new Error("Invalid Method")
        setIsLoading(true);
        setError(null);
        let response;
        try {
            response = await axios[requestConfig.method || 'GET'](requestConfig.url, {...requestConfig.body});
            if (processData !== null) processData(response.data);
        } catch (err) {
            setError(err.response.data || 'Something went wrong!');
        }
        setIsLoading(false);
        return response;
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
}

export default useRequest