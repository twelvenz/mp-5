"use server";

import getCollection, {URL_COLLECTION} from "@/db";

export default async function linkValidation(link: string): Promise<boolean>{
    const urlCollection = await getCollection(URL_COLLECTION);

    const exists = await urlCollection.findOne({ link: link });
    return !exists;
}