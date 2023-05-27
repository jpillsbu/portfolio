import { databases } from "@/appwrite"
import { Project, Projects } from "@/typings";


export const getProjects = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!
    );

    const allProjects = data.documents.map((project) => {
        const { $id, $createdAt, title, description, link, image } = project;
        if (image) {
            const parsedImage = JSON.parse(image);
            return {
                $id,
                $createdAt,
                title,
                description,
                link,
                image: parsedImage
            } as Project;
        } else {
            return {
            $id,
            $createdAt,
            title,
            description,
            link,
            image
        } as Project;
    }});
    
    const sortedProjects = allProjects.sort((a, b) => (
        a.$createdAt > b.$createdAt ? -1 : 1
    ));

    const completedProjects: Projects = {
        projects: sortedProjects
    }

    return completedProjects;
}