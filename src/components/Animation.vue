<template>
<div style="width:100%; height:90vh;">
    <svg width="100%" height="100%" 
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
    name: 'Animation',
    // props: ['posX', 'posY'],
    props: {
        onAnimation: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            posX: 0,
            posY: 0,
            start: null,
            animationId: null,
        }
    },
    methods: {
        startAnimation() {
            this.animationId = window.requestAnimationFrame(this.animation);
        },
        stopAnimation() {
            window.cancelAnimationFrame(this.animationId);
        },
        animation(timestamp) {
            // console.log('animation')
            if (!this.start) this.start = timestamp;
            const progress = timestamp - this.start;
            if (progress > 1000) {
                this.start = timestamp;
                this.changePosition();
            }
            this.animationId = window.requestAnimationFrame(this.animation);
        },
        changePosition() {
            this.posX = this.getRandomInt(1000);
            this.posY = this.getRandomInt(300); 
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    },
    watch: {
        onAnimation: function(newState) {
            if (newState) return this.startAnimation();
            return this.stopAnimation();
        }
    }
}
</script>

<style>

</style>