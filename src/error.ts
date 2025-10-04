export class NotFoundError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options)
  }
}
