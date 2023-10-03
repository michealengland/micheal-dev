import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

const DOMAIN = 'https://micheal.dev'

function generateSitemapItem(data) {
    return {
        url: DOMAIN + data.url,
        lastModified: new Date(),
        priority: 1,
    }
}

function getSiteMapItems(items) {
    return items.map((item) => {
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
    console.log('MLE', sitemapItems)

    return [
        {
            url: `${DOMAIN}/`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${DOMAIN}/blog}`,
            lastModified: new Date(),
            priority: 1,
        },
        ...sitemapItems
    ]
}