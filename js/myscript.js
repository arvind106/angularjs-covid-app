
const API_URL = 'https://covid19.mathdro.id/api';
let app = angular.module('MyApp', []);

app.controller('MyCtrl', function ($scope, $http) {
    $scope.title = "Stay Home Stay Safe";
    //  console.log('app loadded');
    $http.get(API_URL).then(
        (res) => {
            $scope.data = res.data;
        }, (err) => {
            console.log(err)
        });
    $scope.country_case = () => {
        let countr = $scope.country;
        if (countr == '') {
            $scope.country_data = undefined;
            return;
        }
        $http.get(`${API_URL}/countries/${countr}`).then(
            (res) => {
                $scope.country_data = res.data;
            }, (err) => {
                console.log(err)
            });

    }
});
