"use client";

import { useUserStore } from "@/store/UserStore";
import { useState } from "react";

const Blog = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [user, error, signIn, logout] = useUserStore((state) => [
        state.user,
        state.error,
        state.signIn,
        state.logout
    ]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signIn(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="h-[calc(100vh-4rem)]">
            <div className="h-full flex flex-col items-center justify-center">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {user.$id && (
                        <div className="flex flex-col justify-center items-center h-full w-full space-y-6">
                            <div className="px-3 py-1.5 text-5xl text-gray-200">Welcome, back {user.name}</div>
                            <button onClick={logout} className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">Sign out</button>
                        </div>
                    )}
                    {!user.$id && <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={((e) => setEmail(e.target.value))} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">Sign in</button>
                        </div>
                    </form>}
                </div>
                <p className="py-2 text-red-500">{error}</p>
            </div>
        </div>
    );
}


export default Blog