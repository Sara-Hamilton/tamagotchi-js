export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.hunger = 15;
    this.happiness = 15;
    this.sleepiness = 15;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 1000);
  }

  setHappiness() {
    setInterval(() => {
      this.happiness--;
    }, 3000);
  }

  setSleepiness() {
    setInterval(() => {
      this.sleepiness--;
    }, 5000);
  }

  // didYouGetEaten() {
  // if (this.hunger > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  feed() {
      this.hunger = 10;
    }
  }


  // export let bear = {
  //   foodLevel: 10,
  //   setHunger: function() {
  //     const hungerInterval = setInterval(() => {
  //       this.foodLevel--;
  //       if (this.didYouGetEaten() == true) {
  //         clearInterval(hungerInterval);
  //         return "You got eaten!";
  //       }
  //     }, 1000);
  //   },
  //   didYouGetEaten: function() {
  //     if (this.foodLevel > 0) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   },
  //   feed: function(amount) {
  //     let that = this;
  //     return function(food) {
  //       that.foodLevel += amount
  //       return `The bear ate the ${food}! Food level goes up ${amount}!`
  //     }
  //   }
  // };
  //
  // bear.eatSmall = bear.feed(5);

  // function(food) {
  //     this.foodLevel += 5
  //     return `The bear ate the ${food}! Food level goes up 5!`
  //   }
