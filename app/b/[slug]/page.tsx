import prisma from "@/lib/prisma";
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: { params: { slug: string } } ) {
    const blog = await prisma.blog.findUnique({ where: { slug: params.slug } });
    if (!blog) return notFound();
    return (
        <div className="w-full">
            <div className="h-48 p-4 bg-primary flex items-end justify-between">
                <h1 className="text-2xl font-bold text-white">{blog.title}</h1>
                <span className="text-white text-sm">{`${blog.createdAt.getDate()}-${blog.createdAt.getMonth()}-${blog.createdAt.getFullYear()}`}</span>
            </div>
            <div className="p-8">
                <MDXRemote source={blog.content} />
            </div>
        </div>
    );
};