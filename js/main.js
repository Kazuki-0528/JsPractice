"use strict";

{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show()
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScript勉強中'),
    new Post('English'),
    new SponsoredPost('3分でマスター', 'install'),
  ];

  posts[2].show();
}