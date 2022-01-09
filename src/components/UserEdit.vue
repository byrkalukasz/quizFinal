<template>
    <div class="userData">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" required>
        <label for="email">Rola</label>
        <button>Zmień rolę na Administratora </button>
        <button>Zmień rolę na Usera </button>
    </div>
</template>

<script>
export default {
    name: 'UserEdit'
}
</script>

<style scoped>

</style>