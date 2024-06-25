import { Textarea } from "@/components/ui/textarea";

export default function AddBlog() {
    return (
        <div className="w-full flex gap-x-2 p-2 h-[80vh]">
            <Textarea className="resize-none w-1/2" placeholder="Markdown" />
            <Textarea className="resize-none w-1/2" placeholder="Formatted"disabled />
        </div>
    )
;}