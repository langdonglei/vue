<template>
    <div @keyup.enter="add">
        <label>
            <span>id</span>
            <input type="text" v-model="id">
        </label>
        <label>
            <span>name</span>
            <input type="text" v-model="name">
        </label>
        <label>
            <span>age</span>
            <input type="text" v-model="age">
        </label>
        <button @click="add">add</button>
    </div>
</template>

<script>
    export default {
        name: "todo",
        data: function () {
            return {
                id: "",
                name: "",
                age: ""
            }
        },
        methods: {
            add: function () {
                let row = {id: this.id, name: this.name, age: this.age};
                let arr = JSON.parse(localStorage.getItem("arr")) || [];
                arr.push(row);
                localStorage.setItem("arr", JSON.stringify(arr));
                this.$emit("localStorageArrChanged");
            }
        }
    }
</script>
