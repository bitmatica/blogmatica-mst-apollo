module.exports = {
  components: "./src/components/common/index.ts",
  outputPath: "./playroom",
  widths: [320, 1024],
  port: 9000,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [
                require.resolve("@babel/preset-env"),
                require.resolve("@babel/preset-react"),
                require.resolve("@babel/preset-typescript"),
              ],
              plugins: [
                require.resolve("@babel/plugin-proposal-class-properties"),
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  }),
}
