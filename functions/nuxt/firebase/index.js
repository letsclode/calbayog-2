import createApp from './app.js'

import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'

const appConfig = {"apiKey":"AIzaSyCxPQsIHiBKejVabJHVoj8zG0x7bn4yJ08","authDomain":"calbayogapp.firebaseapp.com","projectId":"calbayogapp","storageBucket":"calbayogapp.appspot.com","messagingSenderId":"1097254884850","appId":"1:1097254884850:web:acffbf362713263d56c76b","measurementId":"G-S5SLJR6CEM"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),

    ]
  }

  const [
    firestore,
    storage
  ] = await Promise.all(servicePromises)

  const fire = {
    firestore: firestore,
    storage: storage
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}