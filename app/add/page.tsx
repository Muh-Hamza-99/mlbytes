"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import slugify from "slugify";

type Blog = {
    title: string;
    description: string;
    content: string;
}

export default function AddBlog() {
    const [blog, setBlog] = useState<Blog>({ title: "", description: "", content: "" });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlog(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
    return (
        <div className="w-full p-4">
            <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex gap-x-2">
                    <Input name="title" placeholder="Title" value={blog.title} onChange={event => handleChange(event)} />
                    <Input name="slug" placeholder="Slug" value={slugify(blog.title, { lower: true, trim: true })} disabled />
                </div>
                <Input name="description" placeholder="Description" value={blog.description} onChange={event => handleChange(event)} />
            </div>
            <div className="flex gap-x-2 h-[80vh]">
                <Textarea name="content" className="resize-none w-1/2" placeholder="Markdown" value={blog.content} onChange={event => handleChange(event)} />
                {/* <MDXRemote source={blog.content} /> */}
            </div>
            <div className="flex justify-end">
                <Button>Publish</Button>
            </div>
        </div>
    );
};