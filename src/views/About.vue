<template>
    About
    <hr>
    <button @click="increase">增加</button>
    <hr>
    count: {{ count }}
</template>

<script setup>
const store = useStore()
const count = computed(() => store.state.count)
const increase = () => {
    store.commit('increase', 1)
}
</script>