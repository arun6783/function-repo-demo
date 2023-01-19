module.exports = (api) => {
    api.cache(true);
  
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            debug: false, // Toggle this for more information on what is being bundled
            targets: { node: "current" },
          },
        ],
      ],
      plugins: ["@babel/plugin-syntax-dynamic-import"],
    };
  };
  