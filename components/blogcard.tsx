import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Blog } from "@prisma/client";

type Props = {
    blog: Blog
}

const BlogCard = ({ blog }: Props) => {
  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{blog.description}</p>
        </CardContent>
        <CardFooter>
            <Link className="font-bold hover:text-primary transition" href={`/b/${blog.slug}`}>Read more</Link>
        </CardFooter>
    </Card>
  );
};

export default BlogCard;
