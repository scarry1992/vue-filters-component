<template src="./Filters.html"></template>
<style src="./Filters.css"></style>

<script>
    import 'isomorphic-fetch'
    import Text from '../common/Text.vue'
    import Checkbox from '../common/Checkbox.vue'
    import Select from '../common/Select.vue'
    import Range from '../common/Range.vue'

    export default {
        name: 'filters',
        data () {
            return {
                elements: []
            }
        },
        methods: {
            getUsedElems: function () {
                return this.elements.filter(item => !!item.state)
            },
            getUnusedElems: function () {
                return this.elements.filter(item => !item.state)
            }
        },
        computed: {
            oneElemInUse: function () {
                if (this.getUsedElems().length == 1) {
                    return true;
                }
                return false;
            }
        },
        components: {
            'input-text': Text,
            'input-checkbox': Checkbox,
            'input-select': Select,
            'input-range': Range
        },
        beforeCreate: function () {
            let vm = this;

            fetch('http://localhost:8080/assets/init.json', {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            }).
                then(resp => resp.json()).
                then(json => {
                    vm.elements = json;
                    return json;
                }).
                catch((err) => {console.error(err.message)})
        }
    }
</script>