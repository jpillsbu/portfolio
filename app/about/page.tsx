import Image from "next/image";

const About = () => {
    const essay = [
        "My portfolio and blog website, John Pillsbury, showcases my learnings and projects to the world. As a passionate learner and tech enthusiast, I love exploring technologies and building solutions for real-world problems. My website reflects my skills, creativity, and commitment to continuous learning.",
        "Visitors to my portfolio website can explore my diverse projects and the technologies I've worked with. The blog section shares my insights, thoughts, and experiences in the tech industry. It's a source of inspiration for others' projects and a platform to learn about new tools and techniques.",
        "My portfolio and blog website isn't just a showcase; it's a valuable resource for technology and programming enthusiasts. I'm dedicated to sharing my knowledge and hope to inspire visitors to pursue their passions and create amazing things. Whether you're a seasoned developer or new to tech, my website has something for everyone."
    ]

    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="flex flex-col">
                <div className="flex justify-center flex-col items-center">
                    <h2 className="p-6 flex text-5xl">Learn about this site!</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-between flex-grow">
                    <div className="lg:w-8/12 flex flex-col justify-center">
                        {essay.map((paragraph) => {
                            return (
                                <p className="p-6 text-2xl" key={paragraph}>{paragraph}</p>
                            )
                        })}
                    </div>
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <Image className="w-fit h-4/5 object-contain rounded-3xl"
                            width="400" height="400" src="/profile.png" alt="profile picture" />
                    </div>
                </div>
            </div>
        </div >
    );
}


export default About