module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/**/*.wasm");
    eleventyConfig.addPassthroughCopy("src/**/*.js");
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.ttf");


    return {
        dir: {
            input: "src",
            output: "_site", // Deploy workflow depends on this, so dont change without changing deploy.yml
            includes: "includes",
        }
    }
};