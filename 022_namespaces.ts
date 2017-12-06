namespace Blog {
  export interface IPost {
    title: string;
    body: string;
  }

  export class Post implements IPost {
    title: string;
    body: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
    }
  }
}

namespace Content {
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
  }

  export class Post implements IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeywords = post.seoKeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seoKeywords);
    }
  }
}

var post = new Blog.Post({ title: "The title.", body: "The content body."});
post.printPost();

var contentPost = new Content.Post({
  title: "My great Post.",
  body: "This is some content",
  slug: 'my-great-post',
  seoKeywords: 'any, words'
});

contentPost.printPost();










