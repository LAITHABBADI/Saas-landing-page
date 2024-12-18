// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.nexagents.cloud", // Set your production URL here
  generateRobotsTxt: true, // Optional: Generate robots.txt file
  sitemapSize: 7000, // Optional: Break sitemap into smaller files if you have many URLs
  // Optionally include additional paths or dynamic routes
  additionalPaths: async (config) => {
    const blogs = [
      {
        slug: "The Evolution of AI Chatbots: Transforming Digital Communication in 2024",
        updatedAt: "2024-12-01",
      },
      {
        slug: "The Evolution of AI Chatbots: Transforming Digital Communication in 2024",
        updatedAt: "2024-11-14",
      },
      {
        slug: "The Evolution of AI Agents: From General to Vertical Applications",
        updatedAt: "2024-11-24",
      },
      {
        slug: "Build and Sell AI Agents Without Writing a Single Line of Code",
        updatedAt: "2024-11-28",
      },
    ];

    // Create additional paths for your dynamic blog URLs
    const dynamicBlogPaths = blogs.map((blog) => ({
      loc: `/blog/${encodeURIComponent(blog.slug)}`,
      lastmod: blog.updatedAt,
    }));

    return dynamicBlogPaths;
  },
};
