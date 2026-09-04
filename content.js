const SANITY_PROJECT_ID = "dqxqu43v";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2025-02-19";

const query = encodeURIComponent(`*[_type == "campaignPage"][0]{
  heroTitle,
  heroHighlight,
  heroIntroduction,
  "heroImageUrl": heroImage.asset->url,
  storyHeading,
  storyParagraphOne,
  storyParagraphTwo,
  campaignQuote,
  "historyImageUrl": historyImage.asset->url,
  emailTemplateUrl,
  campaignEmail,
  emailActionText,
  shareActionText,
  joinActionText,
  closingHeading,
  closingHighlight,
  closingText
}`);

const endpoint = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

const setText = (selector, value) => {
  if (!value) return;
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setHref = (selector, value) => {
  if (!value) return;
  const element = document.querySelector(selector);
  if (element) element.href = value;
};

const setImage = (selector, value) => {
  if (!value) return;
  const element = document.querySelector(selector);
  if (element) element.src = `${value}?auto=format&w=1600&q=85`;
};

async function loadCampaignContent() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`Sanity returned ${response.status}`);
    const {result: content} = await response.json();
    if (!content) return;

    setText("#hero-title-text", content.heroTitle);
    setText("#hero-title-highlight", content.heroHighlight);
    setText("#hero-introduction", content.heroIntroduction);
    setImage("#hero-image", content.heroImageUrl);
    setText("#story-heading", content.storyHeading);
    setText("#story-paragraph-one", content.storyParagraphOne);
    setText("#story-paragraph-two", content.storyParagraphTwo);
    setText("#campaign-quote", content.campaignQuote);
    setImage("#history-image", content.historyImageUrl);
    setText("#email-action-text", content.emailActionText);
    setText("#share-action-text", content.shareActionText);
    setText("#join-action-text", content.joinActionText);
    setText("#closing-heading", content.closingHeading);
    setText("#closing-highlight", content.closingHighlight);
    setText("#closing-text", content.closingText);
    setHref("#email-template-link", content.emailTemplateUrl);

    if (content.campaignEmail) {
      const joinHref = `mailto:${content.campaignEmail}?subject=I%20want%20to%20join%20the%20campaign`;
      document.querySelectorAll("[data-campaign-email]").forEach((element) => {
        element.href = joinHref;
        if (element.matches("footer a")) element.textContent = content.campaignEmail;
      });
    }
  } catch (error) {
    console.warn("Using built-in campaign content because Sanity could not be reached.", error);
  }
}

loadCampaignContent();
