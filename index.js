document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(book => {renderBooks(book);
    return book
  });
function renderBooks(book) {
  const main = document.querySelector('main');
    book.forEach(book => 
    {const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2)});
    }
}
renderBooks(book);
