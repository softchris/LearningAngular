function sayHello(name: string): string {
  return "Hello " + name;
}

var sayHello2 = function(name: string): string {
  return "Hello " + name;
};

var sayHello3: (name: string) => string = function(name: string): string {
  return "Hello " + name;
};

function sayHello4(input: string) {
  return "Hello " + input;
}

function sayHi(input: string): string {
  return "Hi, " + input;
}

var greetMe: (name: string) => string;
greetMe = sayHello4;
