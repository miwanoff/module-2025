export class User {
  constructor(name) {
    this.name = name;
  }
}

export class Student extends User {
  constructor(name, university) {
    super(name);
    this.university = university;
  }
}
