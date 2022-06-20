<template>
    <div>
        <!--Header-->
        <nav class="container flex items-center py-4 mt-4 sm:mt-12 ">
            <div class="py-1">
                <img class="w-12 h-12" src="../img/logo.webp" alt="English School Malabo">
            </div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-main uppercase text-xs">
                <li class="cursor-pointer">Inicio</li>
                <li class="cursor-pointer">Noticias</li>
                <li class="cursor-pointer">Sobre Nosotros</li>
                <li class="cursor-pointer">Contácto</li>
                <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
            </ul>
            <div class="flex sm:hidden flex-1 justify-end">
                <i class="fas fa-bars text-2xl"></i>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>