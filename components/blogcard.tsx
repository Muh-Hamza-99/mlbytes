import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
    title: string;
    slug: string;
    description: string;
}

const BlogCard = ({ title, slug, description }: Props) => {
  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{description}</p>
        </CardContent>
        <CardFooter>
            <Link className="font-bold hover:text-primary transition" href={`/b/${slug}`}>Read more</Link>
        </CardFooter>
    </Card>
  );
};

export default BlogCard;
