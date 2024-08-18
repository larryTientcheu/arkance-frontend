const request = async <T>(method: string, endpoint: string, data: any = null): Promise<T> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.status == 204)
      return "" as T;
    
    return await response.json() as T;
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};

export const get = <T>(endpoint: string): Promise<T> => request<T>('GET', endpoint);

export const post = <T>(endpoint: string, data: any): Promise<T> => request<T>('POST', endpoint, data);

export const put = <T>(endpoint: string, data: any): Promise<T> => request<T>('PUT', endpoint, data);

export const del = <T>(endpoint: string): Promise<T> => request<T>('DELETE', endpoint);
