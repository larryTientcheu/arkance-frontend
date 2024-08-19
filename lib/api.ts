const request = async <T>(
  method: string,
  endpoint: string,
  data: any = null,
  revalidate: boolean = true
): Promise<T> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (!revalidate) {
    options.next = { revalidate: 0 };
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.status == 204) return "" as T;

    return (await response.json()) as T;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};

export const get = <T>(endpoint: string, cache: boolean = true): Promise<T> =>
  request<T>("GET", endpoint, null, cache);

export const post = <T>(endpoint: string, data: any, cache: boolean = true): Promise<T> =>
  request<T>("POST", endpoint, data, cache);

export const put = <T>(endpoint: string, data: any, cache: boolean = true): Promise<T> =>
  request<T>("PUT", endpoint, data, cache);

export const del = <T>(endpoint: string, cache: boolean = true): Promise<T> =>
  request<T>("DELETE", endpoint, null, cache);
