<template>
    <label :for="elemId">
        {{label}}
        <input :id="elemId" :name="elemId" type="text" v-model="text" :placeholder="placeholder"/>
    </label>
</template>
<style></style>
<script>
    export default {
        name: 'text',
        props: ['initState'],
        data () {
            return {
                text: this.initState.state,
                elemId: this.initState.elemId,
                label: this.initState.label,
                placeholder: this.initState.placeholder
            }
        }
    }
</script>