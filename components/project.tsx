import getUrl from "@/lib/getUrl";
import { Project } from "@/typings"
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    project: Project
}

function Project({ project }: Props) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (project.image) {
            const fetchImage = async () => {
                const url = await getUrl(project.image)
                if (url) {
                    setImageUrl(url.toString())
                }
            }
            fetchImage()
        }

    }, [project])

    return (
        <div key={project.$id} className="flex flex-col justify-start items-start">
            <a href={project.link} target="_blank">
                {imageUrl && (
                    <Image className="h-auto max-w-full rounded-lg"
                        width="400"
                        height="400"
                        src={imageUrl}
                        alt={project.description} priority={true} />
                )}
                <h3 className="font-semibold">
                    {project.title}
                </h3>
                <p className="max-w-xs">{project.description}</p>
            </a>
        </div>
    )
}

export default Project