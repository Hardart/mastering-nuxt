import { StorageSerializers } from '@vueuse/core'

export default async <T>(url: string) => {
  const serializer = StorageSerializers.object
  const cached = useSessionStorage<T>(url, null, { serializer })

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, { headers: useRequestHeaders(['cookie']) })
    if (error.value) throw createError({ ...error.value, statusMessage: `Не могу получить данные по адресу - ${url}` })
    cached.value = data.value as T
  }

  return cached
}
