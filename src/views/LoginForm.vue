<template>
  <div id="main">
   <Login></Login>
  </div>
</template>

<script>
import Login from "../components/Login.vue"
import { useLoadUses } from "../firebase"

export default{
  name: 'LoginForm',
  components: {
    Login
  },
  setup() {
    const users = useLoadUses()
    console.warn(users)
    return users
  }
}
</script>


<style>

</style>
