import { writable } from 'svelte/store'

const localStorageStores = {}

function LocalStorageStore(key, defaultValue) {
  if (localStorageStores[key]) return localStorageStores[key]
  const valueFromStorage = localStorage.getItem(key)
  const hasJson = valueFromStorage != null && valueFromStorage != 'null' && valueFromStorage != 'undefined'
  const initialValue = hasJson ? JSON.parse(valueFromStorage) : defaultValue

  const { subscribe, set, update } = writable(initialValue)
  const store = {
    subscribe,
    update,
    set: function (value) {
      set(value)
      localStorage.setItem(key, JSON.stringify(value))
    },
  }
  localStorageStores[key] = store
  return store
}

export default LocalStorageStore
