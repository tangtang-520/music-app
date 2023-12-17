const useSongStrone = defineStore("song", {
  state: () =>( {
    musicList: [],// 播放列表信息
    musicSrcArr: [] // 播放地址信息
  }),
  actions: {
    setMusicList(data) {
      this.musicList = data;
    },
    setMusicSrcArr(data) {
      this.musicSrcArr = data;
    },
  },
});

export default useSongStrone;



  