import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/Notes/',
    title: "Armito's Blog",
    description: 'A VitePress Site',
    head: [['link', { rel: 'icon', href: '/imgs/title.ico' }]],
    themeConfig: {
        logo: '/imgs/star.png',

        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Docs',
                items: [
                    {
                        text: '语言',
                        items: [
                            {
                                text: 'CSS',
                                link: '/docs/language/css/',
                            },
                        ],
                    },
                    {
                        text: '框架',
                        items: [
                            {
                                text: 'Vitepress',
                                link: '/docs/frame/vitepress/',
                            },
                        ],
                    },
                    { text: '库', link: '/docs/libarary/' },
                    {
                        text: '工程化',
                        items: [
                            {
                                text: 'Webpack',
                                link: '/docs/engineering/webpack/',
                            },
                        ],
                    },
                ],
            },
        ],

        sidebar: {
            '/docs/language/css': [
                {
                    text: 'CSS',
                    link: '/docs/language/css/',
                    items: [
                        { text: 'BFC', link: '/docs/language/css/block-format-context/' },
                        { text: '层叠上下文', link: '/docs/language/css/cascading-context/' },
                    ],
                },
            ],

            '/docs/frame/vitepress': [
                {
                    text: 'Vitepress',
                    link: '/docs/frame/vitepress/',
                    items: [
                        { text: 'api模版', link: '/docs/frame/vitepress/api-examples/' },
                        { text: 'md模版', link: '/docs/frame/vitepress/markdown-examples/' },
                    ],
                },
            ],

            '/docs/libarary': [
                {
                    text: 'Libarary',
                    link: '/docs/libarary/',
                    items: [{ text: 'Tapable', link: '/docs/libarary/tapable/' }],
                },
            ],

            '/docs/engineering/webpack': [
                {
                    text: 'Webpack',
                    link: '/docs/engineering/webpack/',
                    items: [
                        { text: 'loader', link: '/docs/engineering/webpack/loader/' },
                        { text: 'plugin', link: '/docs/engineering/webpack/plugin/' },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/Armito/Notes' }],
    },
});
