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

interface User {
    $id: string;
    name: string;
    email: string;
}

export type { Projects, Project, Image, User };
