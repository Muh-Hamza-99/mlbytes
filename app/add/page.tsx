"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function AddBlog() {
    const [content, setContent] = useState("");
    return (
        <>
            <div className="w-full flex gap-x-2 p-2 h-[80vh]">
                <Textarea className="resize-none w-1/2" placeholder="Markdown" value={content} onChange={event => setContent(event.target.value)} />
                {/* <MDXRemote source={content} /> */}
            </div>
            <div className="p-4 flex justify-end">
                <Button>Publish</Button>
            </div>
        </>
    )
;}