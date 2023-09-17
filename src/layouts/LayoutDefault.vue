<template>
    <header>
        <Header />
    </header>
    <main class="mt-[60px]">
        <slot />
    </main>
    <footer>
        Footer
    </footer>
</template>

<script>
import Header from '../components/Header/index.vue'
export default {
    name: 'LayoutDefault',
    components: {
        Header
    },
    setup() {

    }

}
</script>

<style></style>