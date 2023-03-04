import getConfig from 'next/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestOptions {
    headers?: any;
    method?: string;
    url?: string;
    data?: any;
}

export async function request(options: RequestOptions): Promise<AxiosResponse> {
    const requestConfig = getRequestConfig(options);

    return await axios(requestConfig);
}

function getRequestConfig(options: any): AxiosRequestConfig {
    const { publicRuntimeConfig } = getConfig();

    return {
        method: options?.method?.toUpperCase() || 'POST',
        url: publicRuntimeConfig.GRAPHQL_URL,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Language': publicRuntimeConfig.APP_LOCALE,
            ...options.headers,
        },
        data: options.data,
        timeout: options.timeout || 30000,
        responseType: 'json',
        adapter: options.adapter || undefined,
        validateStatus: status => {
            return status >= 200 && status < 300;
        },
        paramsSerializer: {
            serialize: (params: any) => {
                return JSON.stringify(params);
            },
        },
    };
}
