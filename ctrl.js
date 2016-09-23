angular.module('friendsList').controller('mainCrtl', function($scope){

 $scope.myName = 'Noah';
 $scope.nums = []
 for (var i = 0; i <= 20; i++){
   $scope.nums.push(i);
 }
 $scope.myFriends = ['carson', 'jake', 'dad'];
 $scope.addFriend = function (name) {
  $scope.myFriends.push(name);
}


})
