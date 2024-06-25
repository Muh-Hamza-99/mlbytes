import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
    title: string;
    description: string;
}

const BlogCard = ({ title, description }: Props) => {
  return (
    <Card className="w-full md:w-[45%]">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{description}</p>
        </CardContent>
        <CardFooter>
            <Link className="font-bold hover:text-primary transition" href="/">Read more</Link>
        </CardFooter>
    </Card>
  );
};

export default BlogCard;
