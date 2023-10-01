const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");
const shortenedUrlTextarea = document.getElementById("shortenedUrl");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  let originalUrl = document.getElementById("originalUrl").value;
  let apiUrl =
    "https:tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortenedUrlTextarea.value = data;
    })
    .catch((error) => {
      shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});
