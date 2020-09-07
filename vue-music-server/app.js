const express = require('express')();
const axios = require('axios');
const cors = require('cors');
express.use(cors());

express.get('/artist/top/song', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/artist/top/song?id=${req.query.id}`);
    res.json({
        code: r.data.code,
        more: r.data.more,
        songs: r.data.songs
    })

});

express.get('/song/url', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/song/url?id=${req.query.id}`);
    res.json({
        code: r.data.code,
        data: r.data.data
    })

});

express.get('/song/detail', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/song/detail?ids=${req.query.ids}`);
    res.json({
        code: r.data.code,
        songs: r.data.songs,
        privileges: r.data.privileges
    })

});

express.get('/comment/hot', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/comment/hot?type=0&id=${req.query.id}`)
    res.json({
        code: r.data.code,
        total: r.data.tatal,
        hotComments: r.data.hotComments,
        hasMore: r.data.hasMore,
        topComments: r.data.topComments
    })
});

express.get('/search', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/search?keywords=${req.query.keywords}`);
    res.json({
        result: r.data.result,
        code: r.data.code
    })
});

express.get('/mv/url', async (req, res) => {
    let r = await axios.get(`https://autumnfish.cn/mv/url?id=${req.query.id}`);
    res.json({
        data: r.data.data,
        code: r.data.code
    })
});


express.listen(3000, () => {
    console.log('启动在3000端口上');
});