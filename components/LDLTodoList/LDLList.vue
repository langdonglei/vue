<template>
    <div>
        <table v-if="arr.length">
            <tr>
                <th>value</th>
                <th>operate</th>
            </tr>
            <tr v-for="(value,index) in arr" :key="index">
                <td>{{value}}</td>
                <td>
                    <button @click="del(index)">del</button>
                </td>
            </tr>
        </table>
        <div v-else>no data</div>
    </div>
</template>

<script>
    export default {
        name: "LDLList",
        data() {
            return {
                arr: []
            }
        },
        methods: {
            loadDataFromLocalStorage: function () {
                // todo {}
                let data = localStorage.getItem("arr") || {};
                this.arr = JSON.parse(data);
            },
            del(index) {
                this.arr.splice(index, 1);
                localStorage.setItem("arr", JSON.stringify(this.arr));
            }
        },
        mounted() {
            this.loadDataFromLocalStorage();
        }

    }
</script>

<style scoped>

</style>