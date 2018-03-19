import { Tamagotchi } from './../src/js/tamagotchi.js';

describe('Tamagotchi', function() {

  let epigotchi = new Tamagotchi("Epigotchi");

  beforeEach(function() {
    jasmine.clock().install();
    epigotchi.setFood();
    epigotchi.setPlay();
    epigotchi.setSleep();
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

  it('should have a food level of 14 after 1001 milliseconds', function() {
    jasmine.clock().tick(1001);
    expect(epigotchi.food).toEqual(14);
  });

});
