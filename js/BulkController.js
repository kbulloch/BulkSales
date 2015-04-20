submarineList.controller('SubmarinesCtrl', function SubmarinesCtrl($scope) {
   $scope.submarines = [
     { name: "Silver Seaman", depth: 2500, power: "Nuclear", price: 1200000 },
     { name: "The Extinguisher", depth: 4800, power: "Diesel", price: 900000 },
     { name: "Mariana Express", depth: 35000, power: "Hyrdolisis", price: 4500000 }
   ];
   $scope.cart = [];
   $scope.total = 0;

   updatePrice = function() {
     var subtotal = 0;
     for (var i = 0; i < $scope.cart.length; i++) {
       var price = $scope.cart[i].price;
       subtotal += price;
     }
     if ($scope.cart.length >= 3) {
       $scope.total = subtotal * .1;
     }
     else {
     $scope.total = subtotal;
     }
   }

   $scope.addToCart = function(submarine) {
     $scope.cart.push(submarine);
     updatePrice();
   };
   $scope.dropItem = function(index) {
    //  var index = $scope.cart.indexOf(submarine);
     $scope.cart.splice(index, 1);
     updatePrice();
   };
});
