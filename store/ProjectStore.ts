import { createProject } from '@/lib/createProject';
import { getProjects } from '@/lib/getProjects';
import { Projects } from '@/typings';
import { create } from 'zustand'

interface ProjectsState {
  completedProjects: Projects;
  getProjects: () => void;
  createProject: (title: string, description: string, link: string, image: string) => void;
}

export const useProjectStore = create<ProjectsState>((set) => ({
    completedProjects: {
    projects: []
  },
  getProjects: async () => {
    const completedProjects = await getProjects();
    set({ completedProjects });
  },
  createProject: async (title, description, link, image) => {
    await createProject(title, description, link, image);
  }
}))
