import { NextConfig } from 'next'
 
const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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