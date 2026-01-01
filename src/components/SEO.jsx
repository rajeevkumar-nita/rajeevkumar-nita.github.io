// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const SEO = ({ title, description, keywords, image, url }) => {
//   return (
//     <Helmet>
//       {/* --- Standard Meta Tags --- */}
//       <title>{title ? `${title} | Rajeev Portfolio` : 'Rajeev Kumar | Software Engineer'}</title>
//       <meta name='description' content={description || "Portfolio of Rajeev Kumar, a Software Engineer specializing in Full-Stack Development."} />
//       {keywords && <meta name='keywords' content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}

//       {/* --- Facebook / LinkedIn / WhatsApp (Open Graph) --- */}
//       <meta property='og:type' content='website' />
//       <meta property='og:url' content={url || window.location.href} />
//       <meta property='og:title' content={title} />
//       <meta property='og:description' content={description} />
//       {image && <meta property='og:image' content={image} />}

//       {/* --- Twitter Card --- */}
//       <meta name='twitter:card' content='summary_large_image' />
//       <meta name='twitter:title' content={title} />
//       <meta name='twitter:description' content={description} />
//       {image && <meta name='twitter:image' content={image} />}
//     </Helmet>
//   );
// };

// export default SEO;



import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE =
  "Rajeev Kumar | Software Engineer | NIT Agartala | GlobalLogic";

const DEFAULT_DESCRIPTION =
  "Rajeev Kumar is a Software Engineer from NIT Agartala, currently working at GlobalLogic. Skilled in Full-Stack Web Development (React, Node.js), Android, and problem solving.";

const DEFAULT_KEYWORDS =
  "Rajeev Kumar NIT Agartala, Rajeev Kumar Software Engineer, NIT Agartala Developer, Rajeev Kumar GlobalLogic, Rajeev Kumar Portfolio";

const DEFAULT_IMAGE =
  "https://rajeev-portfolio-delta.vercel.app/preview-image.png";

const DEFAULT_URL = "https://rajeev-portfolio-delta.vercel.app/";

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
}) => {
  const fullTitle = title.includes("Rajeev Kumar")
    ? title
    : `${title} | Rajeev Kumar`;

  return (
    <Helmet>
      {/* ---------- Primary SEO ---------- */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rajeev Kumar" />
      <meta name="robots" content="index, follow" />

      {/* ---------- Open Graph (LinkedIn / WhatsApp / Facebook) ---------- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* ---------- Twitter ---------- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
