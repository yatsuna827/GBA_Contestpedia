/// <reference lib="WebWorker" />

// see: https://github.com/microsoft/TypeScript/issues/14877
declare var self: ServiceWorkerGlobalScope

import { Hono } from 'hono'
import { fire } from 'hono/service-worker'

import { app as base } from '../index'
import { NotFoundError } from '../error'
import { trimTrailingSlash } from 'hono/trailing-slash'

console.log('Service Worker v0.1 loaded')

self.addEventListener('install', () => {
  console.log('API Worker installing...')
  self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  console.log('API Worker activating...')
  event.waitUntil(self.clients.claim())
})

const app = new Hono()
app.use(trimTrailingSlash())
app.use(async (c, next) => {
  console.log(c.req.url)
  await next()
})
app.onError((err, c) => {
  console.error(err)

  if (err instanceof NotFoundError) {
    return c.notFound()
  }

  return c.text('Internal Server Error', 500)
})
app.route(import.meta.env.BASE_URL, base)

fire(app)
