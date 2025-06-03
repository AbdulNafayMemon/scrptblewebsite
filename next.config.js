   /** @type {import('next').NextConfig} */
   const isGithubPages = process.env.GITHUB_PAGES === 'true';

   const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: isGithubPages ? '/scrptblewebsite' : '',
   };

   module.exports = nextConfig;
