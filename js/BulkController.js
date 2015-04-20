submarineList.controller('SubmarinesCtrl', function SubmarinesCtrl($scope) {
   $scope.submarines = [
     { name: "Silver Seaman", depth: 2500, power: "Nuclear", price: 1200000 },
     { name: "The Extinguisher", depth: 4800, power: "Diesel", price: 900000 },
     { name: "Mariana Express", depth: 35000, power: "Hyrdolisis", price: 4500000 }
   ];
   $scope.cart = [];
   $scope.addToCart = function(submarine) {
     $scope.cart.push(submarine);
   }
});
