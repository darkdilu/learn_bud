import { useEffect, useCallback } from "react";
import { useAuth } from './UseAuth';
import { axiosPrivate } from "./Axios";
import useRefreshToken from "./RefreshToken";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    const attachTokenToRequest = useCallback(
        (config) => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
            }
            return config;
        },
        [auth?.accessToken]
    );

    const handleResponseError = useCallback(
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccessToken = await refresh();
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(error);
        },
        [refresh]
    );

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            attachTokenToRequest,
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            handleResponseError
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [attachTokenToRequest, handleResponseError]);

    return axiosPrivate;
};

export default useAxiosPrivate;

