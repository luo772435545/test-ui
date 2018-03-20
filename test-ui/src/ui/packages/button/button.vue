<template>
    <div class="ui-btn">
         <span :class="className">
           <slot></slot>
         </span>
    </div>
</template>

<script>

    export default {
        name: 'ui-button',
        components: {},
        props:{
            className:String
        },
        data () {
            return {}
        },
        methods: {},
        mounted() {

        },
        computed: {}
    }
</script>

<style scoped>
.ui-btn{width: 100%;height: 36px;background-color: #f5f5f5;border-radius: 3px;border:1px solid #ddd;box-sizing: border-box;color: #333;line-height: 36px;}
.ui-btn .success{background-color: #e0f0d9;display: block;width: 100%;height: 100%}
</style>
