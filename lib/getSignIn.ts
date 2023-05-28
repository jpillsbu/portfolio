import { account } from "@/appwrite";

export const getSignIn = async (email:string, password: string) => {
    try {

        await account.createEmailSession(email, password);
        const {$id, name} = await account.get();
        return { error: '', user: { $id, name, email } };
    }
    catch (error) {
        return { error: 'Something went wrong check email and password', user: { $id: '', name: '', email: '' } };
    }
}