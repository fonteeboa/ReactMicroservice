import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface RequestOptions {
  method: string;
  url: string;
  data?: any;
  headers?: Record<string, any>;
  baseUrl: string;
}

class HttpClient {
  private instance: AxiosInstance;

  /**
   * Constructor for creating an instance of the class.
   *
   * @param {string} baseUrl - The base URL for the API.
   * @param {number} timeout - The timeout value for the API requests. Default is 10000 milliseconds.
   */
  constructor(baseUrl: string, timeout: number = 10000) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout,
    });
  }

  /**
   * Sets the headers for the request.
   *
   * @param {Record<string, any>} headers - The headers to be set.
   * @return {void} - This function does not return anything.
   */
  setHeaders(headers: Record<string, any>): void {
    this.instance.defaults.headers.common = { ...headers };
  }

/**
 * Makes an asynchronous request and returns a promise that resolves to the response data.
 *
 * @param {RequestOptions} options - The options for the request.
 * @param {string} options.method - The HTTP method for the request.
 * @param {string} options.url - The URL for the request.
 * @param {any} options.data - The data to be sent with the request.
 * @param {Object} options.headers - The headers for the request.
 * @param {string} options.baseUrl - The base URL for the request.
 * @return {Promise<T>} A promise that resolves to the response data.
 */
  async makeRequest<T>({
    method,
    url,
    data,
    headers = {},
    baseUrl,
  }: RequestOptions): Promise<T> {
    const axiosInstance = baseUrl ? new HttpClient(baseUrl) : this;

    axiosInstance.setHeaders(headers);

    try {
      const response: AxiosResponse<T> = await axiosInstance.instance({
        method,
        url,
        data,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${(error as Error).message}`);
    }
  }
}

/**
 * Creates an instance of the HttpClient class with the given base URL and optional timeout.
 *
 * @param {string} baseUrl - The base URL to be used for all HTTP requests.
 * @param {number} [timeout] - The optional timeout value in milliseconds for each request.
 * @return {HttpClient} An instance of the HttpClient class.
 */
export const createHttpClient = (baseUrl: string, timeout?: number): HttpClient => {
  return new HttpClient(baseUrl, timeout);
};

export const api = {
  /**
   * Makes a HTTP request with the given options.
   *
   * @param {RequestOptions} options - The options for the HTTP request.
   * @returns {Promise<T>} - A promise that resolves to the response data.
   */
  request: async <T>(options: RequestOptions): Promise<T> => {
    const httpClient = createHttpClient(options.baseUrl);
    return httpClient.makeRequest<T>(options);
  },
};
