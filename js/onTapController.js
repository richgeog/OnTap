onTapModule.controller('OnTapController', [function() {

  var self = this;

  self.doSearch = function() {
    self.searchResult = {

      "pubs": [
        {'name': 'Culpeper',
        'postcode': 'E1 6LT',
        'stars': '4.5',
        'pounds': '££'},
        {'name': 'Pride of Spitalfields',
        'postcode': 'E1 6AA',
        'stars': '3.5',
        'pounds': '£'},
      ]

    };
  };

}]);