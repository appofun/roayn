export type SupportArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  updated: string;
  sections: { heading: string; paragraphs: string[]; steps?: string[] }[];
};

export const supportArticles: SupportArticle[] = [
  {
    slug: "getting-started",
    title: "Getting started with ROAYN products",
    summary: "How to identify an official listing, check compatibility, and find the right support path.",
    category: "General Inquiries",
    updated: "2026-11-06",
    sections: [
      {
        heading: "Use an official product page",
        paragraphs: [
          "Start from a published product page on roayn.com. It will list the verified marketplace destination and the information available for that product.",
          "If a product is not shown in the public catalog, ROAYN has not published a verified website listing for it yet.",
        ],
      },
      {
        heading: "Before installing",
        paragraphs: ["Review the marketplace listing and device requirements before downloading."],
        steps: [
          "Confirm the product name and publisher on the marketplace.",
          "Check the supported platform and device information.",
          "Use only the official store link provided on the product page.",
        ],
      },
    ],
  },
  {
    slug: "compatibility-and-installation",
    title: "Compatibility and installation",
    summary: "General checks for apps, themes, watch faces, and downloadable digital products.",
    category: "General Troubleshooting",
    updated: "2026-11-06",
    sections: [
      {
        heading: "Compatibility varies by product",
        paragraphs: [
          "Compatibility depends on the product, operating-system version, device model, region, and marketplace availability. Product pages should be treated as the primary source for supported-device details.",
        ],
      },
      {
        heading: "Common installation checks",
        paragraphs: ["If an official marketplace reports an installation problem, try these non-destructive checks."],
        steps: [
          "Confirm the device is connected to the internet and has available storage.",
          "Install operating-system and marketplace updates.",
          "Restart the device and retry from the official listing.",
          "Record the exact error message before contacting support.",
        ],
      },
    ],
  },
];

export const faqs = [
  {
    category: "Mobile Apps",
    question: "Where should I download a ROAYN application?",
    answer: "Use only a verified marketplace link shown on a published ROAYN product page. No marketplace links are listed until the product record is verified.",
  },
  {
    category: "Galaxy Themes",
    question: "Why can’t I find a theme in my region?",
    answer: "Theme availability can vary by device, region, account, and Galaxy Store catalog. Check the product page for confirmed compatibility and store availability.",
  },
  {
    category: "Watch Faces",
    question: "Will a watch face work on every smartwatch?",
    answer: "No. Compatibility depends on the operating system and model. Use the supported-device information attached to the specific product.",
  },
  {
    category: "Digital Products",
    question: "How are digital assets delivered?",
    answer: "Delivery details will be stated on each published product page or its official marketplace listing. The site does not claim delivery methods for unpublished products.",
  },
  {
    category: "General Inquiries",
    question: "How do I contact ROAYN?",
    answer: "Use the contact page to prepare an email. The listed inboxes are marked as requiring owner confirmation until email routing is verified.",
  },
];
