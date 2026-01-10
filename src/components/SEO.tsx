import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

function SEO({
  title,
  description,
  keywords = "",
  canonical = "",
  ogImage = "/led-logo.png",
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | LED Lighting Solutions`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", `https://ledlightingsolutionsus.com${canonical}`);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | LED Lighting Solutions`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute("content", `https://ledlightingsolutionsus.com${canonical}`);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", `https://ledlightingsolutionsus.com${ogImage}`);
    }

    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${title} | LED Lighting Solutions`);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", `https://ledlightingsolutionsus.com${ogImage}`);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
}

export default SEO;
