import config from '../config/config.js'
import {Client,Storage,Databases,Query} from 'appwrite'


class Service{
    client = new Client();
    databases
    bucket
    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
       try {
         return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
            title,
            featuredImage,
            content,
            userId,
            status
         })
       } catch (error) {
        console.log("Appwrite service :: createPost :: error" ,error);
       }   
    }

    async updatePost(slug,{content,title,featuredImage}){
       try {
         return await this.databases.uploadDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
             content,
             title,
             featuredImage
         })
       } catch (error) {
        console.log("Appwrite service :: updatePost :: error" ,error);
       }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error" ,error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug)
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" ,error);
        }
    }
    
    async getPosts(queries =[Query.equal("status","active")]){
       try {
         return await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionId,
             queries
         )
       } catch (error) {
        console.log("Appwrite service :: getPosts :: error" ,error);
        
       }
    }

    //file upload service \
    async uploadFile(filePath){
        try {
           return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),filePath)
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" ,error);
            return false;
        }
    }

    async deleteFile(fileId){
       try {
         await this.bucket.deleteFile(config.appwriteBucketId,fileId)
         return true;
       } catch (error) {
        console.log("Appwrite service :: File :: error" ,error);
        return false;
       }
    }

    async getPreview(fileId){
        try {
            return await this.bucket.getFilePreview(config.appwriteBucketId,fileId)
        } catch (error) {
            console.log("Appwrite service :: filePreview :: error" ,error);

        }
    }

}

const service = new Service()
export default service;