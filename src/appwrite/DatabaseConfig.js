import config from "../config/config";
import {Client , ID , Databases , Storage , Query} from "appwrite"
export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async uploadImage({url}){
        try{
            return await this.databases.createDocument(
                 config.appwriteDatabaseId ,
                 config.appwriteCollectionId,
                 ID.unique,
                 {url}

            )
        }
        catch(error){
            console.log(error)
        }
    }
}