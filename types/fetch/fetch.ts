import { AsyncDataOptions } from '#app';
import { FetchOptions } from 'ofetch/dist/node';
import { RouterMethod } from 'h3';

export interface AsyncHttpOptions<ResT> extends AsyncDataOptions<ResT>, FetchOptions {
  method?: Uppercase<RouterMethod>
}
