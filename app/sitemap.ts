import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acharya-sumit.vercel.app',
      lastModified: new Date(),
    },
  ]
}
