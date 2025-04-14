"use server";
import {PropTypes} from "@/types"
import getCollection, {URL_COLLECTION} from "@/db";

export default async function createNewLink(
    url: string,
    link: string,)
    : Promise<PropTypes>{
    console.log("Creating shortened URL");
    const p = {
        url: url,
        link: link
    }

    const urlCollection = await getCollection(URL_COLLECTION);

    const exists = await urlCollection.findOne({ link: link });
    if (exists) {
        throw new Error("Shortened URL already exists.");
    }

    const res = await urlCollection.insertOne({...p});

    if (!res.acknowledged){
        throw new Error("DB insert failed");
    }
    return {...p};
}
