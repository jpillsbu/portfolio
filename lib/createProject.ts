import { ID, databases } from "@/appwrite"

export const createProject = async (projectTitle: string, projectDescription: string, projectLink: string, projectImage: string) => {
    try {
        try {
            let image = JSON.parse(projectImage);
            if (typeof image !== 'object' || !image.bucketId || !image.fileId) {
                throw new Error('Invalid image');
            }
        } catch (error) {
            throw new Error('Invalid image');
        }

        await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!,
            ID.unique(),
            {
                title: projectTitle,
                description: projectDescription,
                link: projectLink,
                image: projectImage
            }
        );
    } catch (error) {
        console.log(error);
    }

}
