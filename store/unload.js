// App.vue
export default {
    name: 'App',
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true
            })
        }
    },
    created() {
        let key = 'store';
        localStorage.getItem(key) && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem(key))));
        window.addEventListener('beforeunload', () => {
            localStorage.setItem(key, JSON.stringify(this.$store.state));
        })
    }
}