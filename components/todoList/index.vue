<template>
    <div>
        <todo @localStorageArrChanged="tellList"></todo>
        <list ref="LDLList"></list>
    </div>
</template>

<script>
    import todo from "./todo";
    import list from "./list";

    export default {
        name: 'todoList',
        components: {
            todo,
            list
        },
        methods: {
            tellList() {
                this.$refs.list.loadDataFromLocalStorage();
            }
        }
    }
</script>
