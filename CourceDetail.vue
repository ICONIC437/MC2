<!-- CourseDetail.vue -->
<template>
  <div>
    <h2>{{ course.title }}</h2>
    <p>{{ course.description }}</p>
    <button @click="enroll">Enroll Now</button>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
  data() {
    return {
      course: {}
    }
  },
  created() {
    // Fetch course details based on route parameter
    const courseId = this.$route.params.id
    // Example API call to fetch course details
    this.course = this.fetchCourse(courseId)
  },
  methods: {
    fetchCourse(id) {
      // Mock API call to fetch course details
      return {
        id: id,
        title: 'Vue.js Fundamentals',
        description: 'Learn the basics of Vue.js framework.'
        // Add more details as needed
      }
    },
    enroll() {
      // Implement enrollment logic here
      alert('You have successfully enrolled in this course!')
    }
  }
}
</script>

<style scoped>
/* Add component-specific styles here */
</style>
