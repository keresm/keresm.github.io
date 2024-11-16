<!-- <template>
    <header class="text-center my-8">
        <h1 class="text-blue-300 text-6xl font-bold mb-4" @click="$router.push('/')" > КЕРЕС БЛОГ </h1>
        <p class="text-xl text-slate-500"> Дарова! </p>
    </header>
</template> -->

<template>
    <header class="border-b border-slate-200 py-4 px-4 bg-white shadow-md sticky top-0 z-10">
  <nav class="flex justify-between items-center">
    <div class="text-blue-300 text-4xl font-bold" @click="$router.push('/')" > КЕРЕС БЛОГ</div>
    <ul class="list-none flex gap-4">
      <li class="text-xl text-slate-500">
        <router-link to="/" active-class="underline">Статьи</router-link>
      </li>
      <li class="text-xl text-slate-500">
        <router-link to="/about" active-class="underline">О нас</router-link>
      </li>
      <!-- <li>
        <router-link to="/contact" active-class="underline" >Контакты</router-link >
      </li> -->
    </ul>
  </nav>
</header>
</template> 