// Vimeo is embedded directly in the hero using Vimeo's official embed code.

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
