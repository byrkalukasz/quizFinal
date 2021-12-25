<template>
    <div class='header'>
        Logo
        <button>Strona główna</button>
        <button> Wyloguj </button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {

    }
}
</script>

<style scooped>
.header
{
    width: 1000%;
    height: 50px;
    position: absolute;
    left: 0%;
    top: 0%;
    background: orange;
}
button
{
    display: inline-grid;
}
</style>