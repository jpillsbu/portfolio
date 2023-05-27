import type { Models } from "appwrite";


interface Projects {
    projects: Project[];
}

interface Project {
    $id: string;
    $createdAt: string;
    title: string;
    description: string;
    link: string;
    image?: Image;
}

interface Image {
    bucketId: string;
    fileId: string;
}

export type { Projects, Project, Image };
