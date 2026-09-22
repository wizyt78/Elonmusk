// Paste your Vimeo URL here.
// Example: const VIMEO_URL = "https://vimeo.com/1229042226?share=copy&fl=sv&fe=ci";
const VIMEO_URL = "";

function getVimeoId(url) {
  const match = String(url || "").match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

function mountVimeo() {
  const frame = document.getElementById("vimeoFrame");
  const id = getVimeoId(VIMEO_URL);
  if (!frame || !id) return; // The hero stays clean until a real Vimeo URL is supplied.

  const iframe = document.createElement("iframe");
  iframe.src = `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&autopause=0&title=0&byline=0&portrait=0&playsinline=1`;
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.title = "Featured video";
  frame.replaceChildren(iframe);
}
mountVimeo();

// Keep the complete 15-comment collection available.
const seeMore = document.getElementById("seeMoreComments");
if (seeMore) {
  seeMore.addEventListener("click", () => {
    seeMore.textContent = "All Comments Shown";
    seeMore.disabled = true;
  });
}

// Keep the comment card functional on-page.
const commentForm = document.getElementById("commentForm");
const commentStatus = document.getElementById("commentStatus");
if (commentForm && commentStatus) {
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!commentForm.checkValidity()) { commentForm.reportValidity(); return; }
    commentStatus.textContent = "Thank you. Your comment has been received for review.";
    commentForm.reset();
  });
}

// Live Chat: both the header link and floating circle open the JivoSite widget.
function openLiveChat(event) {
  event.preventDefault();
  if (window.jivo_api && typeof window.jivo_api.open === "function") {
    window.jivo_api.open();
  } else {
    // Jivo loads asynchronously; keep the page in the chat section if the API is not ready yet.
    document.getElementById("support")?.scrollIntoView({behavior:"smooth"});
  }
}
document.querySelectorAll(".live-chat-link").forEach(link => link.addEventListener("click", openLiveChat));
