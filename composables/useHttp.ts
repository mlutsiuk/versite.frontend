import { UseFetchOptions } from "#app";
import { useAuthStore } from "~/store/auth";
import { FetchError } from 'ohmyfetch';
import { NitroFetchRequest } from "nitropack";
import { RouterMethod } from "h3";

function getFetchOptions<ResT>(options: UseFetchOptions<ResT>) {    // TODO: Check options parameter on all functions
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  options.baseURL = options.baseURL ?? config.public.apiBase;
  options.headers = {
    ...options.headers,
    Accept: 'application/json'
  };

  options.lazy = options.lazy ?? false;

  // Auth
  const token = authStore.accessToken;
  if (token) {
    // @ts-ignore
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  return options;
}

async function useHttp<ResT>(url: string, options: UseFetchOptions<ResT>) {
  options = getFetchOptions<ResT>(options);

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
