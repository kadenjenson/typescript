//Loosely connected Interface with class
var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profile(user) {
    return "Welcome, " + user.email;
}
var joe = new Admin('joe@admin.com');
console.log(joe.role);
var Post = /** @class */ (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post = new Post({ title: "The title.", body: "The content body." });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=021_interface_classes.js.map