var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/users/getUser')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    if (jsonResponse.user) {
                        userCard(jsonResponse.user.username, jsonResponse.user.image, document.querySelector('.userCard'));
                    }
                    else {
                        window.location.href = './../login/login.html';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getUser();
function userCard(userName, userImage, element) {
    try {
        if (!element) {
            throw new Error('Element not found');
        }
        var html = "<div id=\"user-card-container\">\n            <img src=\"" + userImage + "\" alt=\"user image\">\n            <span id=\"user-name\" style=\"cursor: pointer;\">" + userName + "</span>\n            <button id=\"logout\" onclick=\"logout()\">logout</button>\n            </div>";
        element.innerHTML = html;
        var userNameElement = document.getElementById("user-name");
        if (userNameElement) {
            userNameElement.addEventListener("click", function () {
                window.location.href = '../profilePage/profilePage.html';
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function logout() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/users/logout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ userId: "userId" })
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    if (jsonResponse.ok) {
                        localStorage.clear();
                        window.location.href = '../index.html';
                    }
                    else {
                        alert(jsonResponse.error);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function findUserName(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, data, response, jsonResponse, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    form = event.target;
                    data = form.username.value;
                    console.log(data);
                    return [4 /*yield*/, fetch('/users/getUserName', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username: data })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    if (jsonResponse.ok) {
                        console.log("Saving to localStorage: ", jsonResponse.user.username, jsonResponse.user.image, jsonResponse.user._id);
                        localStorage.setItem('username', jsonResponse.user.username);
                        localStorage.setItem('userImage', jsonResponse.user.image);
                        localStorage.setItem('userId', jsonResponse.user._id);
                        window.location.href = './search/search.html';
                    }
                    else {
                        alert(jsonResponse.error);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var button = document.querySelector("#create-Post");
button.addEventListener("click", function () {
    window.location.href = '../post/createPost.html';
});
function displayFollowedPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonResponse, postsContainer_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/posts/getPosts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    if (jsonResponse.posts) {
                        postsContainer_1 = document.getElementById('postsContainer');
                        postsContainer_1.innerHTML = ''; // Clear any existing posts
                        jsonResponse.posts.forEach(function (post) {
                            var postElement = document.createElement('div');
                            postElement.className = 'post';
                            postElement.innerHTML = "\n                    <div class=\"post-header\" data-user-id=\"" + post.author._id + "\" style=\"cursor: pointer;\">\n                        <img src=\"" + post.author.image + "\" alt=\"" + post.author.username + "'s profile picture\" class=\"author-image\">\n                        <span class=\"author-name\">" + post.author.username + "</span>\n                    </div>\n                    <p class=\"post-content\">" + post.content + "</p>\n                    " + (post.imageURL ? "<img src=\"" + post.imageURL + "\" alt=\"Post image\" class=\"post-image\">" : '') + "\n                    <div class=\"post-footer\">\n                        <button onclick=\"handleLikePost('" + post._id + "')\">Like (" + post.likes.length + ")</button>\n                        <button onclick=\"handleShowComments('" + post._id + "')\">Comments (" + post.comments.length + ")</button>\n                    </div>\n                ";
                            postsContainer_1.appendChild(postElement);
                        });
                        postsContainer_1.addEventListener('click', function (event) {
                            var target = event.target;
                            var postHeader = target.closest('.post-header');
                            if (postHeader) {
                                var userId = postHeader.getAttribute('data-user-id');
                                if (userId) {
                                    handleProfile(userId);
                                }
                            }
                        });
                    }
                    else {
                        console.error("Failed to load posts.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error fetching posts:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleLikePost(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var getuser, user, userId, response, jsonResponse, likesCountElement, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch('/users/getUser')];
                case 1:
                    getuser = _a.sent();
                    return [4 /*yield*/, getuser.json()];
                case 2:
                    user = _a.sent();
                    userId = user.user._id;
                    console.log(user.user._id, postId);
                    return [4 /*yield*/, fetch('/posts/like', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ postId: postId, userId: userId })
                        })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    jsonResponse = _a.sent();
                    console.log(jsonResponse);
                    if (response.ok) {
                        likesCountElement = document.getElementById("likes-count-" + postId);
                        if (likesCountElement) {
                            likesCountElement.textContent = jsonResponse.likesCount;
                        }
                    }
                    else {
                        console.error("Error liking post:", jsonResponse.error);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error("There was an error:", error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleProfile(userId) {
    console.log(userId);
    localStorage.setItem('otherUserId', userId);
    window.location.href = '../otherUserPage/otherUserPage.html';
}
