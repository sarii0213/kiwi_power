declare module "axios-case-converter" {
  import { AxiosInstance, AxiosRequestConfig } from "axios";

  interface Options {
    ignoreHeaders?: boolean;
  }

  export default function applyCaseMiddleWare(
    axios: AxiosInstance,
    options?: Options,
  ): AxiosInstance;
}
