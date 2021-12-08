module.exports = {
    verbose: true,
    // collectCoverageFrom: [
    //     "**/*.{js, vue}",
    //     "!**/node_modules/**"
    // ],
     transform: {
         // process `*.vue` files with `vue-jest`
         ".*\\.(vue)$": "vue-jest",
         ".*\\.(js)$": "babel-jest"
     },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['js', 'vue', 'json'],
}