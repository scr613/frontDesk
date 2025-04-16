import { Platform } from 'react-native';

interface RequestOptions extends RequestInit {
    baseURL?: string;
    timeout?: number;
}

interface ResponseData<T = any> {
    code: number;
    data: T;
    message: string;
}

const BASE_URL = 'http://localhost:3000';
const DEFAULT_TIMEOUT = 10000;

class HttpRequest {
    private baseURL: string;
    private timeout: number;

    constructor(options: RequestOptions = {}) {
        this.baseURL = options.baseURL || BASE_URL;
        this.timeout = options.timeout || DEFAULT_TIMEOUT;
    }

    private async request<T>(url: string, options: RequestOptions = {}): Promise<ResponseData<T>> {
        const fullURL = this.baseURL + url;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(fullURL, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    'Platform': Platform.OS,
                    ...options.headers,
                },
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<ResponseData<T>> {
        const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
        return this.request<T>(url + queryString, { method: 'GET' });
    }

    async post<T>(url: string, data?: any): Promise<ResponseData<T>> {
        return this.request<T>(url, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async put<T>(url: string, data?: any): Promise<ResponseData<T>> {
        return this.request<T>(url, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async delete<T>(url: string): Promise<ResponseData<T>> {
        return this.request<T>(url, { method: 'DELETE' });
    }
}

export const http = new HttpRequest();
