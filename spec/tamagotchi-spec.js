import { Tamagotchi } from './../src/js/tamagotchi.js';

describe('Tamagotchi', function() {
  let epigotchi;

  beforeEach(function() {
    epigotchi = new Tamagotchi("Epigotchi");
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

  it('should have a play level of 14 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(epigotchi.play).toEqual(14);
  });

  it('should have a sleep level of 14 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(epigotchi.sleep).toEqual(14);
  });

  it('should die if 16 seconds pass without feeding', function() {
    jasmine.clock().tick(16001);
    expect(epigotchi.didYouDie()).toEqual(true);
  });

  it('should die if food, play, or sleep is less than 0', function() {
    epigotchi.play = -1;
    expect(epigotchi.didYouDie()).toEqual(true);
  });

  it('should increase food by 10 when fed a meal', function() {
    epigotchi.feedMeal();
    expect(epigotchi.food).toEqual(25);
  });

  it('should increase food by 2 and increase play by 2 when fed a snack', function() {
    epigotchi.feedSnack();
    expect(epigotchi.food).toEqual(17);
    expect(epigotchi.play).toEqual(17);
  });

  it('should increase food by 2 and increase play by 5 and decrease sleep by 5 when played with', function() {
    epigotchi.playWith();
    expect(epigotchi.food).toEqual(17);
    expect(epigotchi.play).toEqual(20);
    expect(epigotchi.sleep).toEqual(10);
  });

  it('should decrease food by 2 and increase sleep by 3 when it takes a nap', function() {
    epigotchi.takeNap();
    expect(epigotchi.food).toEqual(13);
    expect(epigotchi.sleep).toEqual(18);
  });

  it('should decrease food by 5 and decrease play by 5 and increase sleep by 5 when it goes to sleep', function() {
    epigotchi.goToSleep();
    expect(epigotchi.food).toEqual(10);
    expect(epigotchi.play).toEqual(10);
    expect(epigotchi.sleep).toEqual(20);
  });

  // it('should pause the game', function() {
  //   jasmine.clock().tick(1001);
  //   expect(epigotchi.food).toEqual(14);
  //   epigotchi.pauseGame();
  //   jasmine.clock().tick(5001);
  //   expect(epigotchi.food).toEqual(14);
  // });

});
