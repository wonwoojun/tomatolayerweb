const logo = document.getElementById("logo");
const film = document.getElementById("film");

logo.addEventListener("click", () => {
  location.reload();
});

film.addEventListener("click", () => {
  film.muted = !film.muted;
});

const tryPlay = () => {
  film.play().catch(() => {});
};

film.addEventListener("loadeddata", tryPlay);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tryPlay();
});
tryPlay();
