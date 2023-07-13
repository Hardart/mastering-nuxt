import { StorageSerializers } from '@vueuse/core'

export default async <T>(chapterSlug: string, lessonSlug: string) => {
  const url = '/api/test'
  const serializer = StorageSerializers.object
  const cacheKey = `${chapterSlug}_${lessonSlug}`
  const cached = useSessionStorage<T>(cacheKey, null, { serializer })

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      headers: useRequestHeaders(['cookie']),
      query: { chapterSlug, lessonSlug },
    })
    if (error.value) throw createError({ ...error.value, statusMessage: `Не могу получить данные по адресу - ${url}` })
    cached.value = data.value as T
  }

  return cached
}
