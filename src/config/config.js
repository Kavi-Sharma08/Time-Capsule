const config = {
    appwriteUrl : String(import.meta.env.VITE_END_POINT),
    appwriteProjectID : String(import.meta.env.VITE_PROJECT_ID),
    appwriteCollectionId :String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_DATABASE_ID)
}
export default config;