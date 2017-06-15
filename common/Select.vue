<template>
    <label :for="elemId">
        {{label}}
        <select :name="elemId" :id="elemId" v-model="value">
            <option v-for="item in options" :value="item.id">{{item.label}}</option>
        </select>
    </label>
</template>
<style></style>
<script>
    export default {
        name: 'select',
        props: ['initState'],
        data () {
            return {
                value: this.initState.state,
                elemId: this.initState.elemId,
                options: this.initState.options,
                label: this.initState.label,
            }
        }
    }
</script>