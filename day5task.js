// 1) The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

   // * title, which is a String representing the title of the movie
   // * studio, which is a String representing the studio that made the movie
   // * rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

     // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

     // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

     // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

     // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”





        class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);




// 2)Circle
//  -radius: double = 1.0
//  -color: String = "red"
//   +Circ1e()
//   +Circ1e(radius : double)
//   +Circ1e(radius :double, color:String)
//   +getRadius ( ) : double
//   +setRadius (radius : double) : void
//   +getC010r() : String
//   +setC010r(c010r : String) : void
//   +toString() :String
//   +getArea( ) : double
//   +getCircumference( ) : double


class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle: radius=${this.radius}, color=${this.color}`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const myCircle = new Circle(); 
console.log(myCircle.toString()); 
console.log(myCircle.getArea()); 
console.log(myCircle.getCircumference()); 

const myOtherCircle = new Circle(2.5, "blue");
console.log(myOtherCircle.toString()); 
console.log(myOtherCircle.getArea()); 
console.log(myOtherCircle.getCircumference());




// 3)  Write a “person” class to hold all the details

class Person {
    constructor(firstName, lastName, age, gender, address, email, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setAddress(address) {
        this.address = address;
    }

    setEmail(email) {
        this.email = email;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `Name: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phoneNumber}`;
    }
}

// Example usage:
const person1 = new Person("John", "Doe", 30, "Male", "123 Main St, City", "john@example.com", "123-456-7890");
console.log(person1.toString());

person1.setAge(35);
person1.setAddress("456 Elm St, Town");
console.log(person1.toString());



// 4)  write a class to calculate the Uber price.


class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceMiles, durationMinutes) {
        const distanceCost = distanceMiles * this.costPerMile;
        const timeCost = durationMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalCost;
    }
}

// Example usage:
const uberCalculator = new UberPriceCalculator(2.5, 0.5, 1.25, 1.0); // Example rates
const distance = 10; // Distance in miles
const duration = 20; // Duration in minutes

const totalPrice = uberCalculator.calculatePrice(distance, duration);
console.log(`Total price: $${totalPrice.toFixed(2)}`);
