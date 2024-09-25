/** @type {import('next').NextConfig} */

const repo = 'https://kai1313a.github.io/company-project/' // GitHub 저장소 이름을 여기에 입력하세요

const nextConfig = {
    output: 'export',
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    images: {
        unoptimized: true
    },
};

export default nextConfig;