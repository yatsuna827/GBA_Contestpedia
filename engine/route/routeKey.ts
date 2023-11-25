export type RouteKey = symbol & { readonly __RouteKey: unique symbol }
export type FileRouteKey = RouteKey & { readonly __FileRouteKey: unique symbol }
