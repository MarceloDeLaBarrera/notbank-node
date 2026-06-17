import { AxiosResponse } from "axios";
import { FormData } from "formdata-node";
export interface FormDataRequest {
    url: string;
    formData: FormData;
    headers?: any;
}
export declare class FormDataRequester {
    static post<T1>(config: FormDataRequest): Promise<AxiosResponse<any>>;
    private static getHeaders;
}
