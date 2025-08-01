import * as SecureStore from 'expo-secure-store';

// export interface TokenCache{
//     getToken: (key: string) => Promise<string |undefined | null>;
//     saveToken: (key: string, token: string) => Promise<void>;
//     // removeToken: (key: string) => Promise<void>;
//     clearToken?: () => void;
// }

export const tokenCache ={
    async getToken(key: string){
        try {
            const token = await SecureStore.getItemAsync(key);
            if(token){
                console.log(`Token retrieved for key ${key}:`, token);
            }else{
                console.log(`No token found for key ${key}`);
            }
            return token || null; // Return null if no token is found
        } catch (error) {
            console.error('Error retrieving token:', error);
            return null; // Return null in case of an error
        }
    },
    async saveToken(key: string, value: string){
        try {
            return await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error('Error saving token:', error);
            throw error; // Re-throw the error to handle it in the calling function
        }
    }

}