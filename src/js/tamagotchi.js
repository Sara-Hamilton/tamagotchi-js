export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.food = 15;
    this.play = 15;
    this.sleep = 15;
  }

  setFood() {
    setInterval(() => {
      this.food--;
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
      this.play--;
    }, 3000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 5000);
  }

  didYouStarve() {
  if (this.food > 0) {
      return false;
    } else {
      return true;
    }
  }

  didYouDie() {
  if (this.food <= 0 || this.play <= 0 || this.sleep <= 0) {
      return true;
    } else {
      return false;
    }
  }

  feedMeal() {
      this.food += 10;
  }

  feedSnack() {
    this.food += 2;
    this.play += 2;
  }

  playWith() {
    this.food +=2;
    this.play +=5;
    this.sleep -=5;
  }

  takeNap() {
    this.food -=2;
    this.sleep +=3;
  }

  goToSleep() {
    this.food -=5;
    this.play -=5;
    this.sleep +=5;
  }

}
