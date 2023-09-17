
<template>
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";

// import { watch } from 'vue'
// import { useRouter, useRoute } from 'vue-router'

// setup() {
//   const router = useRouter()
//   const route = useRoute()

//   watch(() => route.path, async () => {
//     if (route.meta.hasAuth) {
//       const token = window.localStorage.getItem('token')
//       if(!token) {
//         router.push({ name: login})
//         return
//       }

//       const { data } = await ServiceWorkerRegistration.users.getMe()
//       setCurrentUser(data)
//     }
//   })
// }

</script>

<style scoped>

</style>
