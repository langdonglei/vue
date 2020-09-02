import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state    : {
        list: JSON.parse(localStorage.getItem("list") || "[]")
    },
    mutations: {
        updateList: function (state, payload) {
            switch (payload.action) {
                case "add":
                    state.list.push(payload.data);
                    break;
                case "del":
                    state.list.splice(payload.data, 1);
                    break;
            }
            localStorage.setItem("list", JSON.stringify(state.list))
        }
    },
    actions  : {},
    modules  : {}
});
