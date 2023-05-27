import { getProjects } from '@/lib/getProjects';
import { Projects } from '@/typings';
import { create } from 'zustand'

interface ProjectsState {
    completedProjects: Projects;
    getProjects: () => void;
}

export const useProjectStore = create<ProjectsState>((set) => ({
    completedProjects: {
    projects: []
  },
  getProjects: async () => {
    const completedProjects = await getProjects();
    set({ completedProjects });
  }
}))
