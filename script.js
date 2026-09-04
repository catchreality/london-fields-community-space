const shareButton = document.querySelector("#share-button");
const shareStatus = document.querySelector("#share-status");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "Save 28–32 Ellingfort Road",
    text: "Help stop the sale of this important Hackney community space and return it to community use.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      shareStatus.textContent = "Thanks for spreading the word.";
      return;
    }

    await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
    shareStatus.textContent = "Campaign link copied to your clipboard.";
  } catch (error) {
    if (error.name !== "AbortError") {
      shareStatus.textContent = "Copy this page address to share the campaign.";
    }
  }
});
