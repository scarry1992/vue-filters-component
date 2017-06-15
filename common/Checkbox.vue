<template>
    <label :for="elemId">
        {{label}}
        <input :id="elemId" :name="elemId" type="checkbox" v-model="isChecked"/>
    </label>
</template>
<style></style>
<script>
    export default {
        name: 'checkbox',
        props: ['initState'],
        data () {
            return {
                isChecked: this.initState.state,
                elemId: this.initState.elemId,
                label: this.initState.label
            }
        }
    }
</script>