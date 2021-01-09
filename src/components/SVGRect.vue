<template>
<div style="width:100%; height:100%;">
    <svg width="60" height="60" 
        viewPort="0 0 120 120" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect :x="posX+5" :y="posY+5" 
            width="50" height="50"
            rx="15" ry="15"/>
    </svg>
</div>
</template>

<script>

export default {
    name: 'SVGRect',
    props: ['posX', 'posY'],
    computed: {
        getTranslate() {
            return `translate(${this.posX}, ${this.posY})`
        }
    }
}
</script>

<style>

</style>