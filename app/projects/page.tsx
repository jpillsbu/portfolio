import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "NFT Site",
        description: "This is a site that I made to learn about NFTs and how to mint them. It is a simple site that allows you to mint an NFT and then view it on the blockchain.",
        image: "/NFTImage.png",
        link: "https://nft-site-seven.vercel.app/"
    }
]

const Projects = () => {
    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="h-full">
                <div className="p-6 flex justify-center text-5xl">
                    Here is a list of my projects
                </div>
                {(projects.length > 1) ? (
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-9">
                            {projects.map((project) => (
                                (
                                    <div key={project.id} className="flex flex-col justify-start items-start">
                                        <a href={project.link} target="_blank">
                                            <Image className="h-auto max-w-full rounded-lg"
                                                width="400"
                                                height="400"
                                                src={project.image}
                                                alt={project.description} />
                                            <h3 className="font-semibold">
                                                {project.title}
                                            </h3>
                                            <p className="max-w-xs">{project.description}</p>
                                        </a>
                                    </div>
                                )))}
                        </div>
                    </div>
                ) : (
                    <div className="max-h-min flex justify-center items-center">
                        <div key={projects[0].id} className="flex flex-col justify-start items-start">
                            <a href={projects[0].link} target="_blank">
                                <Image className="h-auto max-w-full rounded-lg"
                                    width="400"
                                    height="400"
                                    src={projects[0].image}
                                    alt={projects[0].description} />
                                <h3 className="font-semibold">
                                    {projects[0].title}
                                </h3>
                                <p className="max-w-xs">{projects[0].description}</p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Projects