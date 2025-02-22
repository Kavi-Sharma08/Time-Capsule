import { Client, Account, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67b9ade2002e7a3d17b1");
export const account = new Account(client);
export const databases = new Databases(client , "67b9ae77001836367acf" );
