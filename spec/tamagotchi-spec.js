import { Tamagotchi } from './../src/js/tamagotchi.js';

describe('Tamagotchi', function() {

  let epigotchi = new Tamagotchi("Epigotchi");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create a new Tamagotchi with a food, play, sleep level of 15, 15, 15, respectively', function(){
    expect(epigotchi.name).toEqual("Epigotchi");
    expect(epigotchi.food).toEqual(15);
    expect(epigotchi.play).toEqual(15);
    expect(epigotchi.sleep).toEqual(15);
  });

});
