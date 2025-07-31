// src/api/Axios.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class AxiosClient {
  private instance: AxiosInstance;
  private contentType: string;

  constructor(type: 'json' | 'form' | 'text' | 'urlencoded' = 'json') {
    this.contentType = this.getContentType(type);
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/',
      headers: {
        'Content-Type': this.contentType,
      },
    });
  }

  private getContentType(type: string): string {
    switch (type) {
      case 'form':
        return 'multipart/form-data';
      case 'text':
        return 'text/plain';
      case 'urlencoded':
        return 'application/x-www-form-urlencoded';
      default:
        return 'application/json';
    }
  }

  private urlMerge(url: string): string {
    return url;
  }

  public async post<T = any>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.post(this.urlMerge(url), data);
      return response.data;
    } catch (error: any) {
      console.error('POST Error:', error.response?.data || error.message);
      throw error;
    }
  }

  public async get<T = any>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(this.urlMerge(url));
      return response.data;
    } catch (error: any) {
      console.error('GET Error:', error.response?.data || error.message);
      throw error;
    }
  }
}

export default AxiosClient;



// TODO: example usage in React component or service
// import AxiosClient from 'src/api/Axios';

// const api = new AxiosClient('json');

// async function loginUser() {
//   const data = await api.post('/login', { email: 'abc@example.com', password: '123' });
//   console.log(data);
// }
