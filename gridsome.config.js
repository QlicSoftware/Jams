// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jams',
  templates: {
      Recipe: '/recipes/:slug'
  },
  plugins: [
    {
        use: '@gridsome/source-contentful',
        options: {
          space: process.env.SPACE,
          accessToken: process.env.ACCESS_TOKEN,
          host: 'cdn.contentful.com',
          environment: 'master',
          typeName: ''
        }
    },
    {
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: './tailwind.config.js',
            presetEnvConfig: {},
            shouldImport: true,
            shouldTimeTravel: true
        }
    }
  ]
}
