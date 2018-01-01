function method<T>(arg: T): T {
  return arg;
}

console.log(method<number>(1));
console.log(method<string>("hi"));

function arrayMethod<T>(arg: T[]) {
  console.log(arg.length);
  return arg;
}
