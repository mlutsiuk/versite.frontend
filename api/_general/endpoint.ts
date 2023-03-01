import { RouterMethod } from 'h3';

export interface Endpoint<ResT, ReqT> {
  method?: Uppercase<RouterMethod>,
  url: string
}
