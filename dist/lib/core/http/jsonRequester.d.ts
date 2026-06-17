import { AxiosResponse } from "axios";
import { RequestType } from "../serviceClient.js";
export type RequestData<T1> = {
    url: string;
    requestType: RequestType;
    params?: T1;
    headers?: any;
};
export declare class JsonRequester {
    static request<T1>(config: RequestData<T1>): Promise<AxiosResponse<any>>;
    private static getHeaders;
    private static getUrlWithSearchParams;
}
