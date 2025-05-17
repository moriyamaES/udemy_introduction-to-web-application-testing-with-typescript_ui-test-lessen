const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jest-environment-jsdom',  
  // 以下にtsconfig.app.jsonの設定を追加する 
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};