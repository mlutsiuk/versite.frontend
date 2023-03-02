import { Endpoint } from '~/api';
import { AsyncHttpOptions } from '~/types/fetch/fetch';


type EndpointResT<E extends Endpoint<any, any>> = E extends Endpoint<infer ResT, any> ? ResT : never;
type EndpointReqT<E extends Endpoint<any, any>> = E extends Endpoint<any, infer ReqT> ? ReqT : never;

export function useApiAsyncData<
  EP extends Endpoint<any, any>,
  ResT = EndpointResT<EP>,
  ReqT extends Record<string, any> = EndpointReqT<EP>
>(
  endpoint: EP,
  // TODO: - Support of nullable ReqT(Request Type) in Endpoint interface
  //       - Ref<ReqT>
  body?: ReqT,
  options?: Omit<AsyncHttpOptions<ResT>, 'method' | 'body'>
) {

  return useAsyncHttp<ResT>(endpoint.url, {
    method: endpoint.method,
    body,

    ...options
  });
}
