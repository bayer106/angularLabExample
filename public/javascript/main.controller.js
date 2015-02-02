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
       // {courseName:"", credits:"", letterGrade: ""}
    ];



    $scope.addGPA = function() {
        if($scope.courseName.length >= 1 && $scope.credits.length >= 1 && $scope.letterGrade.length >= 1 ) {
            var grade = $scope.letterGrade.toUpperCase();
            grade = grade.charCodeAt(0);
            document.write(typeof($scope.credits));
            if ($scope.credits <= 0){
                alert("You have entered a number of credits below zero, invalid!");
            } else if (grade < 65 || grade > 68 && grade != 70){
                alert("You picked an invalid letter for a grade!");
            } else {

                $scope.gpaData.push({courseName: $scope.courseName, credits: $scope.credits, letterGrade: $scope.letterGrade });
                $scope.courseName = "";
                $scope.credits = "";
                $scope.letterGrade = "";
            }
        }
    };

    $scope.removeClass = function(index){
        $scope.gpaData.splice(index, 1);
    };

    $scope.calculateGPA = function(){
        var creditByGrade = 0;
        var totalCredits = 0;
        for(i = 0; i< $scope.gpaData.length;i++){
            totalCredits += Number($scope.gpaData[i].credits);
            creditByGrade += Number(($scope.gpaData[i].credits * letterToNum($scope.gpaData[i].letterGrade)));
        }
        return Number(creditByGrade / totalCredits);
    };

    $scope.gpaColorPicker = function(){
        var gpa = $scope.calculateGPA();
        if(gpa >= 3.0){
            return "excellent";
        }
        else if(gpa >= 2.0 && gpa < 3.0){
            return "good"
        }
        else if (gpa < 2.0){
            return "problematic";
        }
    };

});