import { UseFetchOptions } from "#app";
import { useAuthStore } from "~/store/auth";
import { FetchError } from 'ohmyfetch';
import { NitroFetchRequest } from "nitropack";
import { RouterMethod } from "h3";
import { FetchOptions } from "ofetch";
import { AsyncHttpOptions } from '~/types/fetch/fetch';


async function useHttp<ResT>(url: string, options: UseFetchOptions<ResT>) {
  options.$fetch = $fetchCreate();

  return useFetch<ResT, FetchError, NitroFetchRequest, RouterMethod, ResT>(url, options);
}

export async function useHttpGet<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'GET';
  return useHttp<ResT>(url, options)
}

export async function useHttpPost<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'POST';
  return useHttp<ResT>(url, options)
}

export async function useHttpPatch<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'PATCH';
  return useHttp<ResT>(url, options)
}

export async function useHttpDelete<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'DELETE';
  return useHttp<ResT>(url, options)
}

export async function useAsyncHttp<ResT>(url: string, options?: AsyncHttpOptions<ResT>) {

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


  return useAsyncData(() => {
    let fetchFn = $fetchCreate();

    return fetchFn<ResT>(url, fetchOptions);
  }, options);
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
