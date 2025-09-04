// plugins/firebase.client.ts
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app'
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.firebaseApiKey as string | undefined,
    authDomain: config.public.firebaseAuthDomain as string | undefined,
    projectId: config.public.firebaseProjectId as string | undefined,
    storageBucket: config.public.firebaseStorageBucket as string | undefined,
    messagingSenderId: config.public.firebaseMessagingSenderId as string | undefined,
    appId: config.public.firebaseAppId as string | undefined
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

  // You can optionally provide it globally
  return {
    provide: {
      firebase: app
    }
  }
})