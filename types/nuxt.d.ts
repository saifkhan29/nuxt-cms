export {}

declare module '#app' {
  interface NuxtApp {
    $firebase: import('firebase/app').FirebaseApp
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $firebase: import('firebase/app').FirebaseApp
  }
}


