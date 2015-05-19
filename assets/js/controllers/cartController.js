App.controller("CartController", function($scope){
  $scope.products = [
    {name: "Produto 1", price: 30, qty: 0},
    {name: "Produto 2", price: 10, qty: 0},
    {name: "Produto 3", price: 20, qty: 0},
    {name: "Produto 4", price: 50, qty: 0},
    {name: "Produto 5", price: 40, qty: 0},
  ];
  //funcao para remover produtos
  $scope.remove = function(index){
    $scope.products.splice(index, 1);
  };
});