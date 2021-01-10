<template>
<div>
    <div>{{ getState }}</div>
    <button @click="setState">カウント</button>
    <button @click="setRecord">列追加</button>
    <div>
        <div v-for="r in getRecords" :key="r.idx">
            <span>{{ r.idx }}:value={{r.value}}</span>
        </div>
    </div>
</div>
</template>

<script>
import store from '../store/Store';
import Vue from 'vue';

Vue.observable(store);

export default {
    name: 'StoreSample',
    data() {
        return {
            idx: 0,
        }
    },
    computed: {
        getState() {
            return store.db.state;
        },
        getRecords() {
            return store.db.records;
        }
    },
    methods: {
        setState() {
            store.db.state += 1;
        },
        setRecord() {
            store.db.records.push({id: this.idx, value: Math.random()});
            this.idx += 1;
        }
    }
}
</script>

<style>

</style>