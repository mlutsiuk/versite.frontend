import { RouterMethod } from 'h3';
import { AsyncHttpOptions } from '~/types/fetch/fetch';
import { ConditionalProperty, RequiredFieldsOnly } from '~/types/object';

type AsyncDataOptions<ResT, ReqT, RouteParamsT> = ConditionalProperty<
  ConditionalProperty<
    Omit<AsyncHttpOptions<ResT>, 'method' | 'body'>,
    'body',
    ReqT
  >,
  'routeParams',
  RouteParamsT
>;

type ConditionallyRequiredOptions<OptionsT extends object> =
  keyof RequiredFieldsOnly<OptionsT> extends never // If options don't have any required field
    ? [OptionsT?] // They can be optional
    : [OptionsT]; // Otherwise, required

export class Endpoint<
  ResT,
  ReqT extends Record<string, any> | undefined = undefined,
  RouteParamsT = undefined
> {
  private readonly method;
  private readonly url: ((params: RouteParamsT) => string) | string;

  constructor(opts: {
    method: Uppercase<RouterMethod>;
    url: RouteParamsT extends undefined
      ? string
      : (params: RouteParamsT) => string;
  }) {
    this.method = opts.method;
    this.url = opts.url;
  }

  public asyncData(
    ...[options]: ConditionallyRequiredOptions<
      AsyncDataOptions<ResT, ReqT, RouteParamsT>
    >
  ) {
    let url =
      this.url instanceof Function
        ? this.url(options!.routeParams as RouteParamsT)
        : this.url;

    let key = `${this.method}-${url}`;

    return useApiAsyncData<ResT>(
      url,
      {
        method: this.method,

        ...options
      },
      key
    );
  }

  public fetch(
    ...[options]: ConditionallyRequiredOptions<
      AsyncDataOptions<ResT, ReqT, RouteParamsT>
    >
  ) {
    let url =
      this.url instanceof Function
        ? this.url(options!.routeParams as RouteParamsT)
        : this.url;

    return useApiFetch<ResT>(url, {
      method: this.method,

      ...options
    });
  }
}
