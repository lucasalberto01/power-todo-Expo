require('dotenv').config()

module.exports = {
    expo: {
        name: 'Power-Todo',
        slug: 'power-todo',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            apiUrl: process.env.API_URL,
            eas: {
                projectId: '8b609178-5387-4cda-8c4e-ccd96cafd3a9',
            },
        },
        owner: 'lucasalberto98',
        runtimeVersion: {
            policy: 'sdkVersion',
        },
        updates: {
            url: 'https://u.expo.dev/8b609178-5387-4cda-8c4e-ccd96cafd3a9',
        },
    },
}
