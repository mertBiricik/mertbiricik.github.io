const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addGlobalData("layout", "post");

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("google0b64d5c9758fafd9.html");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("dateISO", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("year", function(date) {
    return new Date(date).getFullYear();
  });

  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
