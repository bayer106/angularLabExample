var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "Our Page", link: '/ourpage'},
            {text: "GPACalculator", link: '/GPACalculator'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "CAT"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });
mainApp.controller('GPACtrl', function($scope){
    $scope.courseName = "";
    $scope.credits = "";
    $scope.letterGrade = "";

    $scope.gpaData = [

    ];

    $scope.addGPA = function() {
        if($scope.courseName.length >= 1 && $scope.credits.length >= 1 && $scope.letterGrade.length >= 1) {
            $scope.gpaData.push({courseName: $scope.courseName, credits: $scope.credits,letterGrade: $scope.letterGrade });
            $scope.courseName = "";
            $scope.credits = "";
            $scope.letterGrade = "";
        }
    };

    $scope.removeClass = function(index){
        $scope.data.splice(index, 1);
    };
});