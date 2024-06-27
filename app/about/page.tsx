import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="w-full p-4 flex gap-4 flex-col-reverse md:flex-row">
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <h1 className="text-xl text-primary font-bold">About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates natus dolore fuga rerum pariatur corrupti doloremque, dignissimos optio animi eos ipsa repellendus, beatae mollitia maiores quod nihil nobis harum error.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem quia dolorum, repellendus consequatur quisquam, quod neque autem sit officiis laudantium, odio earum iusto voluptas blanditiis fugit eius cum doloribus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat consequuntur dolores nisi dolorem, totam esse illo unde impedit quia quae, nostrum enim debitis necessitatibus adipisci dolor mollitia ipsum molestias.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image src="https://images.unsplash.com/1/type-away.jpg" width={500} height={500} alt="Typing away" className="rounded-lg" />
            </div>
        </div>
    );
};