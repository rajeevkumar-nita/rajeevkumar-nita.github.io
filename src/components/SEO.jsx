import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      {/* --- Standard Meta Tags --- */}
      <title>{title ? `${title} | Rajeev Portfolio` : 'Rajeev Kumar | Software Engineer'}</title>
      <meta name='description' content={description || "Portfolio of Rajeev Kumar, a Software Engineer specializing in Full-Stack Development."} />
      {keywords && <meta name='keywords' content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}

      {/* --- Facebook / LinkedIn / WhatsApp (Open Graph) --- */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url || window.location.href} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}

      {/* --- Twitter Card --- */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  );
};

export default SEO;