import { NextResponse } from "next/server";

// Define blogs with slugs in plain format (no URL encoding)
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

// Function to generate the sitemap
export async function GET() {
  // Dynamically set base URL depending on the environment (use localhost for dev and production URL for deployment)
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://your-domain.com" // Replace with your production URL
      : "http://localhost:3000";

  // Generate dynamic blog URLs with human-readable slugs
  const blogUrls = blogs.map(
    (blog) => `
    <url>
      <loc>${baseUrl}/blog/${encodeURIComponent(blog.slug)}</loc>
      <lastmod>${blog.updatedAt}</lastmod>
    </url>
  `
  );

  // Generate the sitemap XML
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      </url>
      ${blogUrls.join("")}
    </urlset>
  `;

  // Ensure the response is properly formatted and has no extraneous characters or spaces before XML
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
