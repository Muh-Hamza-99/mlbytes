import BlogCard from "@/components/blogcard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const data: {title: string, description: string}[] = [
  {
    title: "An Interactive Guide to CSS Grid",
    description: "CSS Grid is an incredibly powerful tool for building layouts on the web, but like all powerful tools, there's a significant learning curve. In this tutorial, we'll build a mental model for how CSS Grid works and how we can use it effectively. I'll share the biggest 💡 lightbulb moments I've had in my own learning journey."
  },
  {
    title: "Understanding the JavaScript Modulo Operator",
    description: "One of the most commonly-misunderstood operators is Modulo (%). In this tutorial, we'll unpack exactly what this little bugger does, and learn how it can help us solve practical problems."
  },
  {
    title: "Making Sense of React Server Components",
    description: "This year, the React team unveiled something they've been quietly researching for years: an official way to run React components exclusively on the server. This is a significant paradigm shift, and it's caused a whole lot of confusion in the React community. In this tutorial, we'll explore this new world, and build an intuition for how it works, and how we can take advantage of it."
  }
];

export default function Home() {
  return (
    <>
      <Link href="/add" className="text-xl rounded-full fixed bottom-0 right-0 m-2 p-2 bg-primary text-white">
        <Plus />
      </Link>
      <div className="w-full p-8 flex flex-wrap justify-center gap-8">
        {data.map(blog => <BlogCard title={blog.title} description={blog.description} />)}
      </div>
    </>
  );
};
