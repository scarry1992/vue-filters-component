<template>
    <label>
        {{initState.label}}
        <input class="range" type="text" :name="initState.elemId + '_min'"
               v-model.number="val_1"
        >
        <input class="range" type="text" :name="initState.elemId + '_max'"
               v-model.number="val_2"
        >
    </label>
</template>
<style></style>
<script>
    export default {
        name: 'Range',
        props: ['initState'],
        data () {
            return {
                val_1: this.initState.state[0],
                val_2: this.initState.state[1],
                elemId: this.initState.elemId,
                label: this.initState.label
            }
        }
    }
</script>