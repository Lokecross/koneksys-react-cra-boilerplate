// jest.config.js
process.env.TZ = 'GMT';
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  "modulePaths": [
    "src",
    "test"
  ],
};


