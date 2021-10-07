import React, { useState } from 'react';

export interface RequestConfig {
  url: any;
  method: 'POST' | 'GET';
  headers?: HeadersInit;
  body?: BodyInit;
}

export interface ErrorResponse {}

export interface UseHttpReturn {
  isLoading: boolean;
  sendRequest: () => {};
}

function useHttp(): {
  isLoading: boolean;
  sendRequest: <T>(requestConfig: RequestConfig, applyData: (data: T) => void) => Promise<void>;
} {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const sendRequest = async function <T>(requestConfig: RequestConfig, applyData: (data: T) => void) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null,
      });
      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return { isLoading, sendRequest };
}

export default useHttp;
