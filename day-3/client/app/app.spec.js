describe('echonest service', function() {

  beforeEach(module('myServices'));

  it('should load the playlist from the api', inject(function(echonest, $httpBackend) {
    $httpBackend.whenGET('/api/playlist?artist=my+artist').respond(200, {
      response: {
        status: {},
        songs: [
          'song 1',
          'song 2'
        ]
      }
    });

    var fulfilled = jasmine.createSpy();
    var rejected = jasmine.createSpy();
    echonest.getPlaylistByArtist('my artist').then(fulfilled, rejected);

    $httpBackend.flush();

    expect(fulfilled).toHaveBeenCalledWith(['song 1', 'song 2']);
    expect(rejected).not.toHaveBeenCalled();

  }));
});