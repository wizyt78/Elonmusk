// Paste your Vimeo URL here.
// Example: https://vimeo.com/123456789
const VIMEO_URL = "";

function getVimeoId(url) {
  const match = String(url).match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

function mountVimeo() {
  const frame = document.getElementById("vimeoFrame");
  const id = getVimeoId(VIMEO_URL);
  if (!frame || !id) return;

  const iframe = document.createElement("iframe");
  iframe.src =
    `https://player.vimeo.com/video/${id}` +
    `?autoplay=1&muted=1&loop=1&autopause=0&title=0&byline=0&portrait=0` +
    `&playsinline=1`;
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.title = "Featured Vantage Capital video";
  frame.replaceChildren(iframe);
}
mountVimeo();

// Comment cards: keep all 15 cards available, with a See More control for presentation.
const seeMore = document.getElementById("seeMoreComments");
if (seeMore) {
  seeMore.addEventListener("click", () => {
    document.querySelectorAll(".comment").forEach(card => card.style.display = "flex");
    seeMore.textContent = "All Comments Shown";
    seeMore.disabled = true;
    seeMore.style.opacity = ".65";
  });
}

// Comment card submission stays local to the page.
const commentForm = document.getElementById("commentForm");
const commentStatus = document.getElementById("commentStatus");
if (commentForm && commentStatus) {
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!commentForm.checkValidity()) {
      commentForm.reportValidity();
      return;
    }
    commentStatus.textContent = "Thank you. Your comment has been submitted for review.";
    commentForm.reset();
  });
}
