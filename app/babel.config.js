module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // (다른 플러그인이 있다면 그 다음 줄 위에 배치)
      "react-native-worklets/plugin", // ← Reanimated 플러그인, 항상 마지막!
    ],
  };
};
