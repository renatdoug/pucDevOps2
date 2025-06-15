const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/testes/**/*.test.ts'], // Ajuste se necessário
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

