import { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djeedxjwfctnsrtzhlpu.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
        search: '',
      },
    ],
  },
}
 
export default config