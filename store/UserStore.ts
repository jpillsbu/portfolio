import { getLogout } from '@/lib/getLogout';
import { getSignIn } from '@/lib/getSignIn';
import { User } from '@/typings';
import { create } from 'zustand'

interface UserState {
  user: User;
  error: string;
  signIn: (email: string, password:string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    $id: '',
    name: '',
    email: ''
  },
  error: '',
  signIn: async (email, password) => {
    const { error, user} = await getSignIn(email, password);
    set({ error, user });
  },
  logout: async () => {
    const { error, user} = await getLogout();
    set({ error, user });
  }
}))
