<!-- Home.vue -->
<template>
  <div>
    <h1>Welcome to our Online Learning Platform</h1>
    <!-- Display list of courses -->
    <ul>
      <li v-for="course in courses" :key="course.id">
        <router-link :to="'/course/' + course.id">{{ course.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      courses: [
        { id: 1, title: 'Vue.js Fundamentals' },
        { id: 2, title: 'React Basics' },
        { id: 3, title: 'Node.js Crash Course' }
        // Add more courses as needed
      ]
    }
  }
}
</script>

<style scoped>
/* Add component-specific styles here */
</style>
