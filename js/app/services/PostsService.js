function PostsService($http) {

  this.getAll = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };

  this.getArticle = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  };

}

angular
  .module('app')
  .service('PostsService', PostsService);