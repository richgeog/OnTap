describe('OnTapController', function() {
  beforeEach(module('OnTap'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('OnTapController');
  }));

  var pubs = [
  {'name': 'Culpeper',
  'postcode': 'E1 6LT',
  'stars': '4.5',
  'pounds': '££'}
  ]

  it('initialises with empty search bar and no search results', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('searching for a pub', function() {
    it('shows a list of pubs near you when you enter your location', function() {
      ctrl.searchTerm = 'E1 6LT';
      ctrl.doSearch();
      expect(ctrl.searchResult.pubs[0].name).toEqual('Culpeper');
    });
  });
});