const bookmarksList = document.getElementById("bookmarks");

function addBookmark(name, url) {
  const bookmark = document.createElement("li");
  bookmark.innerHTML = `
    <span>${name} Website´s:</span>
    <a href="${url}" target="_blank">Link</a>
    <button class="delete-btn">Delete</button>
  `;
  bookmarksList.appendChild(bookmark);

  const deleteBtn = bookmark.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    bookmark.remove();
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //To over right it the dafault reset property
  const name = form.name.value.trim();
  const url = form.url.value.trim();
  if (name === "" || url === "") {
    alert("Please fill in all fields.");
  } else {
    addBookmark(name, url);
 }
 form.reset();
});



