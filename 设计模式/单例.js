let CreateSingleton = (function(){
  let instance;
  return function(name) {
      if (instance) {
          return instance;
      }
      this.name = name;
      return instance = this;
  }
})();
CreateSingleton.prototype.getName = function() {
  console.log(this.name);
}

let Winner = new CreateSingleton('Winner');
let Looser = new CreateSingleton('Looser');
