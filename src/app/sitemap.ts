import {MetadataRoute} from 'next'
import {allPosts} from 'contentlayer/generated'

const BASE_URL = process.env.SITE_URL

function generateSitemapItem(data:any) {
  return {
    url: BASE_URL + data.url,
    lastModified: new Date(),
    priority: 1,
  }
}

function getSiteMapItems(items:any) {
  return items.map((item:any) => {
    return generateSitemapItem(item)
  })
}

// Generates sitemap.xml file.
// return [
//     {
//     url: 'https://acme.com',
//     lastModified: new Date(),
//     changeFrequency: 'yearly',
//     priority: 1,
//     },
// ]
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapItems = getSiteMapItems(allPosts)

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog}`,
      lastModified: new Date(),
      priority: 1,
    },
    ...sitemapItems
  ]
}