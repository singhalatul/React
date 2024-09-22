import {Client,Account,ID} from 'appwrite'
import config from '../config/config.js'


class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
         const userAccount = await this.account.create(ID.unique(),email,password,name)
         if(userAccount){
           return this. login({email,password})
         }
         else{
            return useAccount;
         }

        } catch (error) {
            console.log("Appwrite service :: createUser :: error" ,error);
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Appwrite service :: Login :: error" ,error);
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();          
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error" ,error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: logoutUser :: error" ,error);
            
        }
    }
}
const authService = new AuthService()
export default authService;

const client = new Client();



const account = new Account(client);
