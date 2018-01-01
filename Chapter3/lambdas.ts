var double = x => x * 2;
var add = (x, y) => x + y;
var reducedArray = [23, 5, 62, 16].reduce((a, b) => a + b, 0);

var addAndDouble = (x, y) => {
  var sum = x + y;
  return sum * 2;
};

function delayedGreeting(name: string): void {
  this.name = name;
  this.greet = function() {
    setTimeout(() => {
      alert("Hello " + this.name);
    }, 0);
  };
}

var greeting = new delayedGreeting("Peter");
greeting.greet(); // alert 'Hello undefined'
