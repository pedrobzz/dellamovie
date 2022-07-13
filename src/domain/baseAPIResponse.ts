export interface BaseAPIResponse<T = any> {
  status: number;
  succes: boolean;
  data?: T;
  error?: string;
}