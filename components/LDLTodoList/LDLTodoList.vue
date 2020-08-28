<template>
    <div>
        <LDLTodo @localStorageArrChanged="tellList"></LDLTodo>
        <LDLList ref="LDLList"></LDLList>
    </div>
</template>

<script>
    import LDLTodo from "./LDLTodo";
    import LDLList from "./LDLList";

    export default {
        components: {
            LDLTodo,
            LDLList
        },
        methods: {
            tellList() {
                this.$refs.LDLList.loadDataFromLocalStorage();
            }
        }
    }
</script>
