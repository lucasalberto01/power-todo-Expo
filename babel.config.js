module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            'babel-plugin-transform-inline-environment-variables',
            [
                'module:react-native-dotenv',
                {
                    moduleName: 'react-native-dotenv',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
        ],
    }
}
