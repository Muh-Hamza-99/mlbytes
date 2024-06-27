import BlogCard from "@/components/blogcard";
import prisma from "@/lib/prisma";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const blogs = await prisma.blog.findMany({});
  return (
    <>
      <Link href="/add" className="text-xl rounded-full fixed bottom-0 right-0 m-2 p-2 bg-primary text-white">
        <Plus />
      </Link>
      <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map(blog => <BlogCard blog={blog} />)}
      </div>
    </>
  );
};
