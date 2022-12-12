<script setup>

</script>

<template>
    <div class="bar">
        <button type="button">Home</button>
        <button type="button">Movie</button>
    </div>
</template>

<style scoped>
.bar {
    height: 50px;
    background-color: black;
}

.bar>button {
    color: white;
    text-align: right;
}

.bar>button:hover {
    color: black;
    padding-right: 0%;
}
</style>