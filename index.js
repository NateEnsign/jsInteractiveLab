//1-add the event listener
//2-get the value from the input box
//3-create a new element in the list

document.querySelector("form").addEventListener("submit", addMovie)
let message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault()
  let inputField = document.querySelector('input')

  let movie = document.createElement('li')

  let movieTitle = document.createElement("span")
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle)

  let list = document.querySelector("ul")
  list.appendChild(movie);

  inputField.value = ''


  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)

}




function deleteMovie(event) {

    message.textContent = `Movie deleted!`

    event.target.parentNode.remove()
}




function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

