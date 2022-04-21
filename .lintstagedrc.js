/**
 * lint-staged config
 * @ref https://www.npmjs.com/package/lint-staged
 * @desc generated at 2022/4/22 07:25:36 by streakingman-cli@1.7.1
 */

module.exports = {
    '*.{[tj]s,[tj]sx,[cm]js}': ['eslint --fix'],
    '*.json': ['prettier --write'],

    '*.{css,scss}': ['stylelint --fix'],
};
