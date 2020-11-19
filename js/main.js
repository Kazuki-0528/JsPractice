"use strict";

{
  const posts = [
    {
      text: 'JavaScriptのstudy...',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'study...',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];
  posts[0].show();
  posts[1].show();
}