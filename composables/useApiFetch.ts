import { UseFetchOptions } from '#app';
import { useAuthStore } from '~/store/auth';
import { NitroFetchRequest } from 'nitropack';
import { RouterMethod } from 'h3';
import { FetchError, FetchOptions } from 'ofetch';
import { AsyncHttpOptions } from '~/types/fetch/fetch';


export async function useApiFetch<ResT>(url: string, options: UseFetchOptions<ResT>) {
  options.$fetch = $fetchCreate();

  return useFetch<ResT, FetchError, NitroFetchRequest, RouterMethod, ResT>(url, options);
}

export async function useApiAsyncData<ResT>(url: string, options?: AsyncHttpOptions<ResT>, key?: string) {

  options = options || {};

  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    ...fetchOptions
  } = options;


  let fetchHandler = () => {
    let fetchFn = $fetchCreate();

    return fetchFn<ResT>(url, fetchOptions);
  };

  return key
    ? useAsyncData<ResT>(key, fetchHandler, options)
    : useAsyncData<ResT>(fetchHandler, options);
}


function $fetchCreate() {
  let options: FetchOptions = {};

  const config = useRuntimeConfig();


  options.baseURL = options.baseURL ?? config.public.apiBase;
  options.headers = {
    ...options.headers,
    Accept: 'application/json'
  };

  // Auth
  const authStore = useAuthStore();
  const token = authStore.accessToken;
  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
      ...options.headers
    };
  }

  return $fetch.create(options);
}
