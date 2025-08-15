declare module '#app' {
  interface NuxtApp {
    $i18n?: {
      locale: string | Ref<string>
      setLocale?: (locale: string) => Promise<void>
    }
  }
}
