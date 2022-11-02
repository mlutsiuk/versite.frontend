import { UseFetchOptions } from "#app";
import { useAuthStore } from "~/store/auth";
import { FetchError } from 'ohmyfetch';
import { NitroFetchRequest } from "nitropack";

function getFetchOptions<ResT>(options: UseFetchOptions<ResT>) {    // TODO: Check options parameter on all functions
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  options.baseURL = options.baseURL ?? config.public.apiBase;
  options.headers = {
    ...options.headers,
    Accept: 'application/json'
  };

  options.initialCache = options.initialCache ?? false;
  options.lazy = options.lazy ?? false;

  // Auth
  const token = authStore.accessToken;
  if(token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  return options;
}

async function useHttp<ResT>(url: string, options: UseFetchOptions<ResT>) {
  options = getFetchOptions<ResT>(options);

  return await useFetch<ResT, FetchError, NitroFetchRequest, ResT>(url, options);
}

export async function useHttpGet<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'GET';
  return useHttp<ResT>(url, options)
}

export async function useHttpPost<ResT>(url: string, options: UseFetchOptions<ResT> = {}) {
  options.method = 'POST';
  return useHttp<ResT>(url, options)
}
