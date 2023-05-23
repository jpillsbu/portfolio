import Image from "next/image";

const About = () => {
    const essay = [
        "John Pillsbury's portfolio and blog website is a platform where he showcases his learnings and projects to the world. As a passionate learner and a tech enthusiast, John loves to explore various technologies and tools and build things that solve real-world problems. His portfolio website is a perfect reflection of his skills and creativity, and it serves as a testament to his commitment to continuous learning.",
        "On John's portfolio website, visitors can explore his various projects and get a glimpse of the different technologies he has worked with. John's website also includes a blog section where he shares his insights, thoughts, and experiences about the tech industry. Visitors can learn about new tools, techniques, and technologies that John has explored and find inspiration for their own projects.",
        "John's portfolio and blog website is not just a showcase of his skills, but it also serves as a valuable resource for anyone interested in technology and programming. John is committed to sharing his knowledge and experience with others and hopes that his website will inspire and motivate others to pursue their own passions and build great things. Whether you are a seasoned developer or just starting in the tech industry, John's website has something to offer for everyone."
    ]

    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="h-full flex flex-col">
                <div className="flex justify-center flex-col items-center">
                    <h2 className="p-6 flex text-5xl">Learn about this site!</h2>
                </div>
                <div className="flex flex-col lg:flex-row  justify-between flex-grow">
                    <div className="w-full flex flex-col justify-center">
                        {essay.map((paragraph) => {
                            return (
                                <p className="p-6 text-2xl" key={paragraph}>{paragraph}</p>
                            )
                        })}
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Image className="w-fit h-4/5 object-contain rounded-3xl"
                            width="400" height="400" src="/profile.png" alt="profile picture" />
                    </div>
                </div>
            </div>
        </div >
    );
}


export default About