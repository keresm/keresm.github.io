<script setup>
    import store from '../store.js'
</script>

<template>
    <div class="Home">
        <main class="container mx-auto">
            <h1 class="text-slate-900 text-3xl font-bold mb-4"> </h1>
            <h1 class="text-slate-900 text-3xl font-bold mb-4"> Новости</h1>
            <div class="PostItem border border-slate-200 mb-4 p-4 rounded-lg" v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1 class="text-slate-900 text-3xl font-bold mb-4">{{ item.title }}
                </h1>
                <p class="text-xl text-slate-500 mb-2"> {{ item.description }} </p>
                <p class="text-xl text-slate-300"> {{ item.date }} </p>
            </div>
        </main>
    </div>
</template>