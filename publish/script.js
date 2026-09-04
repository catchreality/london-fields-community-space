const shareButton = document.querySelector("#share-button");
const shareStatus = document.querySelector("#share-status");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "Support ACV status for 28–32 Ellingfort Road",
    text: "The sale has been stopped. Help secure the building’s future by supporting the ACV application if you’re on the Hackney electoral roll.",
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
