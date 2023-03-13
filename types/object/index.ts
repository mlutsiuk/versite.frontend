/**
 * If PropertyT is not undefined, adds required [Key] property to Base type.
 * Otherwise, adds optional [Key] property with type never.
 */
export type ConditionalProperty<Base, Key extends string, PropertyT> = Base & (
  PropertyT extends undefined
    ? { [key in Key]?: never }
    : { [key in Key]: PropertyT}
  );

/**
 * Returns new object containing only the required properties from [T] type.
 */
export type RequiredFieldsOnly<T extends object> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

/**
 * Omit all properties with given type.
 */
type OmitType<T, V> = {
  [K in keyof T]-?: T[K] extends V ? never : K
}[keyof T];

type KeysMatching<T, V> = {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T];

export type MappedConditionalProperties<
  Base,
  Map,
  NonUnd extends keyof Map = OmitType<Map, undefined>,
  Und extends keyof Map = Exclude<keyof Map, NonUnd>,
> = Base & {
  [K in NonUnd]: Map[K]
} & {
  [K in Und]?: never
};
