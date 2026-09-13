/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    testMatch: ['**/test/**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json', isolatedModules: true }]
    }
};
