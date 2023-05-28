import { account } from "@/appwrite";

export const getLogout = async () => {
    try {
        await account.deleteSession("current");
        return { error: '', user : { $id: '', name: '', email: '' } };
    }
    catch (error) {
        return { error: 'Something went wrong logging out user', user : { $id: '', name: '', email: '' } };
    }
}