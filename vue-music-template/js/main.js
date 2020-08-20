let vm = new Vue({
    el: '.wrap',
    data: {
        currentIndex: -1,
        isplaying: false, //是否正在播放
        isMvShow: false,//mv图标false默认不显示
        keywords: '',//搜索内容
        musicList: [], //所有歌曲列表
        musicPic: '', //歌曲图片
        musciComments: [],//音乐热门评论
        musicUrl: '',//音乐播放地址
        isShow: false,//mv默认不显示
        mvUrl: '',//mv的url地址
        flag: true,//用户控制用户点击回车键是否可以再点击(1.3s)
    },
    created() {
        // 创建完成
        // 获取所有歌曲列表
        this.getSongsList();
    },
    methods: {
        // 获取所有歌曲列表
        async getSongsList() {
            let res = await axios.get('http://localhost:3000/artist/top/song?id=6452');
            this.musicList = res.data.songs;
        },

        //  播放音乐
        playMusic(id, index) {
            console.log('playmu');
            this.currentIndex = index;
            axios
                .get('http://localhost:3000/song/url?id=' + id)
                .then(response => {
                    this.musicUrl = response.data.data[0].url;
                });
        },
        // 搜索歌曲
        seachMusic() {
            this.flag = false;
            let str = 'http://localhost:3000/search?keywords=' + escape(this.keywords);
            axios
                .get(str)
                .then(response => {
                    this.flag = true;
                    this.musicList = response.data.result.songs;
                })

        },
        // 上一首
        prev() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = 0
            }
            let id = this.musicList[this.currentIndex].id;
            axios
                .get('http://localhost:3000/song/url?id=' + id)
                .then(response => {
                    this.musicUrl = response.data.data[0].url;
                });
        },
        // 下一首
        next() {
            this.currentIndex++;
            if (this.currentIndex > this.musicList.length - 1) {
                this.currentIndex = this.musicList.length - 1;
            }
            let id = this.musicList[this.currentIndex].id;
            axios
                .get('http://localhost:3000/song/url?id=' + id)
                .then(response => {
                    this.musicUrl = response.data.data[0].url;
                });
        },
        // 音乐播放
        play() {
            this.isplaying = true;
            this.musicPic = this.musicList[this.currentIndex].al.picUrl;
            let id = this.musicList[this.currentIndex].id;
            this.getComments(id);
        },
        getComments(id) {
            axios
                .get('http://localhost:3000/comment/hot?type=0&id=' + id)
                .then(
                    response => {
                        this.musciComments = response.data.hotComments;
                    }
                );
        },
        // 音乐暂停
        pause() {
            this.isplaying = false;
        },
        // 播放mv
        playMv(mvId) {
            this.musicUrl = '';
            this.isShow = true;
            this.getComments(mvId);
            axios
                .get('https://autumnfish.cn/mv/url?id=' + mvId)
                .then(response => {
                    this.mvUrl = response.data.data.url;
                });
        },
        // 点击遮罩层 隐藏mv
        hide() {
            this.isShow = false;
        }
    }
});