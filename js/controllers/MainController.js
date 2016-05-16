app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        {
            name: 'The Dark Knight',
            imdb_rating: 9.0,
            pubdate: new Date('2006', '03', '08'),
            cover: 'http://ecx.images-amazon.com/images/I/51ZapaPtV2L._SX200_QL80_.jpg',
            video: 'res/vid/the_dark_knight.mp4',
            imdb_link: 'http://www.imdb.com/title/tt0468569/?ref_=fn_al_tt_1',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Program or be Programmed',
            imdb_rating: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            video: 'res/vid/the_dark_knight.mp4',
            imdb_link: 'http://www.imdb.com/title/tt0468569/?ref_=fn_al_tt_1',
            likes: 0,
            dislikes: 0
        },

    ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
}]);