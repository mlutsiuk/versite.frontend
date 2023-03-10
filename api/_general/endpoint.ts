import { RouterMethod } from 'h3';
import { AsyncHttpOptions } from '~/types/fetch/fetch';

export class Endpoint<
  ResT,
  ReqT extends Record<string, any> | never = never,
  UrlParamsT = undefined
> {
  private readonly method;
  private readonly url: ((params: UrlParamsT) => string) | string;

  constructor(opts: {
    method: Uppercase<RouterMethod>,
    url: UrlParamsT extends undefined ? string : (params: UrlParamsT) => string
  }) {
    this.method = opts.method;
    this.url = opts.url;
  }

  public asyncData(
    body?: ReqT,
    options?: Omit<AsyncHttpOptions<ResT>, 'method' | 'body'>,
    urlParams?: UrlParamsT
  ) {

    let url = this.url instanceof Function
      ? this.url(urlParams)
      : this.url;

    return useAsyncHttp<ResT>(url, {
      method: this.method,
      body: body,

      ...options
    });
  }
}
