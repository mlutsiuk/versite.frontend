import { RouterMethod } from 'h3';
import { AsyncHttpOptions } from '~/types/fetch/fetch';

// interface PaParams<ResT, ReqT, RouteParamsT> extends Omit<AsyncHttpOptions<ResT>, 'method' | 'body'> {
//   body: ReqT extends undefined ? never : ReqT,
//   routeParams?: RouteParamsT extends undefined ? undefined : RouteParamsT
// }

interface PaParams<ResT> extends Omit<AsyncHttpOptions<ResT>, 'method' | 'body'> {
  // body: ReqT extends undefined ? never : ReqT,
  // routeParams?: RouteParamsT extends undefined ? undefined : RouteParamsT
}

type BPaParams<ResT, ReqT> = ReqT extends undefined    // TODO: Create helper type
  ? PaParams<ResT> & { body?: never }
  : PaParams<ResT> & { body: ReqT};

type RBPaParams<ResT, ReqT, RouteParamsT> = RouteParamsT extends undefined
  ? BPaParams<ResT, ReqT> & { routeParams?: never }
  : BPaParams<ResT, ReqT> & { routeParams: RouteParamsT };

export class Endpoint<
  ResT,
  ReqT extends Record<string, any> | undefined = undefined,
  RouteParamsT = undefined
> {
  private readonly method;
  private readonly url: ((params: RouteParamsT) => string) | string;

  constructor(opts: {
    method: Uppercase<RouterMethod>,
    url: RouteParamsT extends undefined ? string : (params: RouteParamsT) => string
  }) {
    this.method = opts.method;
    this.url = opts.url;
  }

  public asyncData(
    options: RBPaParams<ResT, ReqT, RouteParamsT>
  ) {

    let url = this.url instanceof Function
      ? this.url(options.routeParams as RouteParamsT)    // TODO: Check for undefined
      : this.url;

    return useAsyncHttp<ResT>(url, {
      method: this.method,

      ...options
    });
  }
}
