import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

function formatDate(date: string) {
  const currentDate = new Date();
  const postDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - postDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - postDate.getMonth();
  const daysAgo = currentDate.getDate() - postDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = postDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate}`;
}

export default function Posts() {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link className="prose dark:prose-invert" href={post.slug}>
            <h3>{post.title}</h3>
          </Link>
          {/* {post.description && (
            <p className="prose dark:prose-invert py-1">{post.description}</p>
          )} */}
          <p className="prose dark:prose-invert">{formatDate(post.date)}</p>
        </article>
      ))}
    </div>
  );
}
