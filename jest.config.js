// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jest-environment-jsdom",
  // 以下にtsconfig.app.jsonの設定を追加する
  transform: {
    // 以下は本コースの講師作成したコードであるが動かなかった
    // "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
    
    // 以下はGeminiが回答したコードで問題解決した
    "^.+.tsx?$": [
      "ts-jest",
      {
        // tsconfig: "tsconfig.app.json",
        tsconfig: "tsconfig.jest.json", // テスト専用のtsconfigを参照
        useESM: true, // ESモジュールとして処理するようts-jestに指示
      },
    ],
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};




