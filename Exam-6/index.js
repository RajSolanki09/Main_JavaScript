class Book {
  #author;
  #price;
  #rentalPrice;
  #copiesAvailable;

  constructor(title, _author, _price, _rentalPrice, _copiesAvailable) {
    this.title = title;
    this.#author = _author;
    this.#price = _price;
    this.#rentalPrice = _rentalPrice;
    this.#copiesAvailable = _copiesAvailable;
  }

  getAuthor() {
    return this.#author;
  }

  setAuthor(_author) {
    this.#author = _author;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(_price) {
    this.#price = _price;
  }

  getRentalPrice() {
    return this.#rentalPrice;
  }

  setRentalPrice(_rentalPrice) {
    this.#rentalPrice = _rentalPrice;
  }

  buyBook(copies) {
    if (this.#copiesAvailable >= copies) {
      this.#copiesAvailable -= copies;
      console.log(`${copies} book(s) bought successfully.`);
    } else {
      console.log(
        `Only ${
          this.#copiesAvailable
        } copies are available. Cannot buy ${copies} copies.`
      );
    }
  }

  rentBook(copies) {
    if (this.#copiesAvailable >= copies) {
      this.#copiesAvailable -= copies;
      console.log(`${copies} book(s) rented successfully.`);
      return (this.#rentalPrice -= copies);
    } else {
      console.log(
        `Only ${
          this.#copiesAvailable
        } copies are available. Cannot rent ${copies} copies.`
      );
    }
  }

  returnBook(copies) {
    this.#copiesAvailable += copies;
    console.log(`${copies} Book(s) returned successfully`);
  }

  checkAvailability() {
    return `Title: ${this.title}, Author: ${this.#author}, Price: ${
      this.#price
    }, Rental Price: ${this.#rentalPrice}, Copies Available: ${
      this.#copiesAvailable
    }`;
  }
}

let book = new Book("JAY BHEEM", "BABA SAHAB A.", 100, 30, 5);

console.log(book);

book.setPrice(200);

console.log(book.getPrice());

console.log(book.checkAvailability());

book.buyBook(1);
console.log(book.checkAvailability());

book.rentBook(2);
console.log(book.checkAvailability());

book.returnBook(2);
console.log(book.checkAvailability());
