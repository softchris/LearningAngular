function greetMeOptional(name: string, greeting?: string): string {
  console.log(greeting);
  if (!greeting) {
    greeting = "Hello";
  }

  return greeting + ", " + name;
}

console.log(greetMe("Chris"));
