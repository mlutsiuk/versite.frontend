export type ResponseMeta = {
  include: string[];
  custom: string[];
  pagination?: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    /* links: {
      previous: string
    } */
  };
};

export type ResourceArray<T> = {
  data: Array<T>;
  meta: ResponseMeta;
};

export type ResourceSingle<T> = {
  data: T;
  meta: ResponseMeta;
  // TODO: _profiler: object
};
