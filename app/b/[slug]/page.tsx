import prisma from "@/lib/prisma";
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation";

const testMDX = `# Linear Regression

## Cost Function

## Gradient Descent`

export default async function BlogPage({ params }: { params: { slug: string } } ) {
    // const blog = await prisma.blog.findUnique({ where: { slug: params.slug } });
    // if (!blog) return notFound();
    return (
        <div className="w-full">
            <div className="h-48 p-8 bg-primary flex items-end">
                <h1 className="text-2xl font-bold text-white">Understanding the JavaScript Modulo Operator</h1>
            </div>
            <div className="p-8">
                <MDXRemote source={testMDX} />
            </div>
        </div>
    );
};