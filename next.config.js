/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.ophim1.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim2.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim3.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim4.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim5.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim6.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim7.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim8.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim9.cc',
                port: '',
                pathname: '/uploads/movies/**',
            },
        ],
    },
}

module.exports = nextConfig
