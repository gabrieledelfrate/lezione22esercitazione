class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age === otherUser.age) {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      } else if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      }
    }
  }
  
  const user1 = new User("Mario", "Bros", 25, "Genova");
  const user2 = new User("Luigi", "Bros", 25, "Milano");
  
  console.log(user1.compareAge(user2)); 