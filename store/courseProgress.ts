import { CourseProgress } from '~/types/course'
import { useUserStore } from './user'
export const useCourseProgress = defineStore('courseProgress', () => {
  // STATE
  const progress = ref<CourseProgress>({})
  const initialized = ref(false)

  const { user } = useUserStore()

  // GETTERS
  const persentageCompleted = computed(() => {
    const chapters = Object.values(progress.value).map(chapter => {
      const lessons = Object.values(chapter)
      const completedLessons = lessons.filter(isCompleted => isCompleted)
      return ((completedLessons.length / lessons.length) * 100).toFixed(0) + '%'
    })

    const totalLessons = Object.values(progress.value).reduce((n, chapter) => Object.values(chapter).length + n, 0)
    const totalCompletedLessons = Object.values(progress.value).reduce((n, chapter) => Object.values(chapter).filter(isCompleted => isCompleted).length + n, 0)
    const course = ((totalCompletedLessons / totalLessons) * 100).toFixed(0) + '%'

    return { chapters, course }
  })

  // ACTIONS
  const toggleComplete = async (chapter: string, lesson: string) => {
    // const user = useSupabaseUser()
    // if (!user.value) return
    const currentProgress: boolean = progress.value[chapter]?.[lesson]

    progress.value[chapter] = { ...progress.value[chapter], [lesson]: !currentProgress }
    try {
      const url = `/api/course/chapter/${chapter}/lesson/${lesson}/progress`
      await $fetch(url, { method: 'POST', body: { completed: !currentProgress } })
    } catch (error) {
      console.error(error)
      progress.value[chapter] = { ...progress.value[chapter], [lesson]: currentProgress }
    }
  }

  async function init() {
    if (!user) return
    if (initialized.value) return
    initialized.value = true
    const { data: userProgress } = await useFetch<CourseProgress>('/api/user/progress', { headers: useRequestHeaders(['cookie']) })
    if (userProgress.value) progress.value = userProgress.value
  }

  return { progress, init, toggleComplete, persentageCompleted }
})
