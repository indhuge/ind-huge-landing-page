import type { MetadataRoute } from 'next'
import { getHost } from '@/host' 
import { createClient } from '@/prismicio';

export default function robots(): MetadataRoute.Robots {

    const client = createClient()
    
    return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: getHost() + '/sitemap.xml',
  }
}