import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { computed, ref } from 'vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const useStore = defineStore(
  'storeId1',
  () => {
    const count = ref(0)
    const token = ref<string | null>(null)

    const setToken = (newToken: string) => {
      token.value = 'Bearer ' + newToken
      return token.value
    }

    const delToken = () => {
      console.log('2')
      token.value = null
      return token.value
    }

    const doubleCount = computed(() => count.value * 2)
    const getToken = computed(() => token.value)

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    const initStorageListener = () => {
      if (import.meta.client) {
        window.addEventListener('storage', (event) => {
          if (event.key === 'storeId1' && event.newValue) {
            const newValue = JSON.parse(event.newValue)
            if (newValue && newValue.count !== undefined) {
              count.value = newValue.count
            }
          }
        })
      }
    }

    return {
      count,
      token,
      doubleCount,
      getToken,
      setToken,
      delToken,
      increment,
      decrement,
      initStorageListener,
    }
  },
  {
    persist: {
      storage: import.meta.client ? sessionStorage : undefined,
    },
  }
)
