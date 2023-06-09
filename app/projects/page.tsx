"use client";

import MyModal from "@/components/modal";
import Project from "@/components/project";
import { useProjectStore } from "@/store/ProjectStore";
import { useUserStore } from "@/store/UserStore";
import { useEffect } from "react";

const Projects = () => {
    const [completedProjects, getProjects] = useProjectStore((state) => [
        state.completedProjects,
        state.getProjects
    ]);

    useEffect(() => {
        getProjects()
    }, [getProjects])

    const [user] = useUserStore((state) => [
        state.user,
    ]);

    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="h-full">
                <div className="p-6 flex justify-center text-5xl">
                    Here is a list of my projects
                </div>
                <div>
                    {!user.$id && (
                        <MyModal buttonTitle="Project" />
                    )}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-7xl mx-auto p-5">
                        {completedProjects.projects.map((project) => (
                            <Project key={project.$id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects
