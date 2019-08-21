<template>
    <m-header/>
    <m-side-menu/>
    <m-content/>
</template>

<script>
    import MHeader from './Header'
    import MSideMenu from './SideMenu'
    import MContent from './Content'
    export default {
        name: "Homepage",
        components:{
            MHeader,
            MSideMenu,
            MContent
        }
    }
</script>

<style scoped>

</style>