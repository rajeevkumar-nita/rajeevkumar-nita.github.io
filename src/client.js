import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'u5ms1n3y', 
  dataset: 'production',
  apiVersion: '2025-11-16', // Aaj ki date
  useCdn: true,
});