export function sealed(param: string) {
  console.log(`Sealed Factory: ${param}`);
  return function(target: Function): void {
    console.log(`Sealed Decorator: ${param}`);
    Object.seal(target);
    Object.seal(target.prototype);

    console.log(target);
    console.log(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log(`Creating New Instance`);
    console.log(`Constructor Function: ${target.name}`);

    this.age = 30;
  }
  
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  }

  return newConstructor as TFunction;
}