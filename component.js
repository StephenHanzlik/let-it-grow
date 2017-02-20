'use strict';

angular.module('app', ['angularMoment', 'ngHighcharts'])
  .component("reddit", {

    controller: function() {
      const vm = this;

      vm.posts = [{
          Title: "yvon chouinard",
          body: "yvon is on a glaicer",
          author: "Jazz",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yvon_Chouinard._Mt_Hood.jpg/220px-Yvon_Chouinard._Mt_Hood.jpg",
          votes: 3,
          comments: [],
          commStatus: false,
          date: new Date()
        },
        {
          Title: "yvon chouinard",
          body: "yvon is on a glaicer",
          author: "Egg",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yvon_Chouinard._Mt_Hood.jpg/220px-Yvon_Chouinard._Mt_Hood.jpg",
          votes: 8,
          comments: [],
          commStatus: false,
          date: new Date()
        },
        {
          Title: "yvon chouinard",
          body: "yvon is on a glaicer",
          author: "Dinky",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yvon_Chouinard._Mt_Hood.jpg/220px-Yvon_Chouinard._Mt_Hood.jpg",
          votes: 10,
          comments: [],
          commStatus: false,
          date: new Date()
        }
      ];

      vm.addPost = function() {
        if (vm.newPost) {
          vm.newPost.commStatus = false;
          vm.newPost.date = new Date();
          vm.newPost.votes = 0;
          vm.newPost.comments = [];
          vm.posts.push(vm.newPost);
          vm.tog += 1;
          delete vm.newPost;
        }
      }

      vm.dropInitVal = "-votes";

      vm.dropInitText = "Votes"

      vm.tog = 1;

      vm.toggle = function() {
        vm.tog += 1;
      }

      vm.showComments = function(obj) {
        if (obj.commStatus === false) {
          obj.commStatus = true;
        } else if (obj.commStatus === true) {
          obj.commStatus = false;
        }
      }

      vm.postComments = function(post) {
        post.comments.push(vm.comment.entry);
        delete vm.comment.entry;
      }


      vm.upVote = function(obj) {
        obj.votes += 1;
      }

      vm.downVote = function(obj) {
        if (obj.votes > 0) {
          obj.votes -= 1;
        }
      }

      vm.deletePost = function() {}

    },
    templateUrl: "template.html"

  });
