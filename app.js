class Media {
  constructor(title) {
    this._title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut == true) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingsSum / this.ratings.length;
  }

  addRating(more) {
    this._ratings.push(more);
  }

  set isCheckedOut(checked) {
    this._ischeckedOut = checked;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//Create a Book instance
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

console.log(historyOfEverything);

//Call .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5
historyOfEverything.addRating(4);

console.log(historyOfEverything.getAverageRating());

//Create a Movie instance

const speed = new Movie("Speed", "Jan de Bont", 116);

//Call .toggleCheckOutStatus() on the speed instance

speed.toggleCheckOutStatus();

// Log the value saved to the isCheckedOut property in the speed instance.
console.log(speed);
