import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// Define the directory path where the Markdown blog posts are stored
const postsDirectory = join(process.cwd(), "mdxData/blogs/posts");

/**
 * Retrieve slugs of all available blog posts.
 *
 * @returns {string[]} An array containing slugs of all blog posts.
 */
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Retrieve a blog post by its slug, along with specified fields.
 *
 * @param {string} slug - The unique identifier for the blog post.
 * @param {string[]} [fields=[]] - An optional array specifying which fields to include.
 * @returns {Object} An object containing the requested fields for the specified blog post.
 */
export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

/**
 * Retrieve all blog posts, sorted by date in descending order.
 *
 * @param {string[]} [fields=[]] - An optional array specifying which fields to include.
 * @returns {Object[]} An array containing objects representing all blog posts.
 */
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}
