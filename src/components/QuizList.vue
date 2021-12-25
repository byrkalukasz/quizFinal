<template>
    <div class="quizlist">
        <table>
            <tr>
                <th>Test</th>
                <th>Test2</th>
            </tr>
            <tr>
                <td>testyy</td>
                <td>testyy</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'QuizList',
    components: {
        
    },
}
</script>

<style scoped>
.quizlist
{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    background: white;
}
</style>