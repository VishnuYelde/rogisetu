import { databases, id } from "./client"

const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID
const collectionId = import.meta.env.VITE_APPWRITE_HOSPITAL_COLLECTION_ID

export const getHospitals = async () => {
    try {
        return await databases.listDocuments(
            databaseId,
            collectionId,
            []
        )
    } catch (error) {
        console.error("Appwrite Service Error :: getHospitals :: error", error)
        throw error;
    }
}

export const addHospital = async ({name, address, contact}) => {
    try {
        return await databases.createDocument(
            databaseId,
            collectionId,
            id.unique(),
            {
                name,
                address, 
                contact
            }
        )
    } catch (error) {
        console.error("Appwrite Service Error :: addHospital :: error", error)
        throw error;
    }
}

export const updateHospital = async (id, {name, address, contact}) => {
    try {
        return await databases.updateDocument(
            databaseId,
            collectionId,
            id,
            {
                name,
                address,
                contact
            }
        )
    } catch (error) {
        console.error("Appwrite Service Error :: updateHospital :: error", error)
        throw error;
    }
}

export const deleteHospital = async (id) => {
    try {
        return await databases.deleteDocument(
            databaseId,
            collectionId,
            id
        )
    } catch (error) {
        console.error("Appwrite Service Error :: deleteHospital :: error", error)
        throw error;
    }
}