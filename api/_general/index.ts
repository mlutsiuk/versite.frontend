export type ResponseSingleResource<T> = {
  data: T,
  meta: ResponseMeta,
  // TODO: _profiler: object
}

export type ResponseMeta = {
  include: string[],
  custom: string[],
  pagination?: ResponseMetaPagination
}


export type ResponseMetaPagination = {
  total: number,
  count: number,
  per_page: number,
  current_page: number,
  total_pages: number,
  /*links: {
    previous: string
  }*/
}
