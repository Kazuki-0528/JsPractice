let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "メンタリストDaiGo", age: 32, teachpsychology() {} },
        { name: "あっちゃん", age: 37, teachHistory() {} }
      ],
      teach() {}
    },
    entertainment: {
      youtuber: [{ name: "Jin"}, { name: "マホト"}],
      makeSmile() {}
    },
    studyEnglish: {
      youtuber: [{ name: "バイリンガール"}],
      teachEnglish() {}
    }
  },
  plan() {},
  uploadVideo() {}
};

youtuber.list.business.youtuber[0].name
youtuber.list.business.youtuber[0].teachpsychology();

youtuber.plan();