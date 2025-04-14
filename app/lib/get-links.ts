import getCollection, {URL_COLLECTION} from "@/db";

export default async function getAlias(link: string): Promise< string | null> {

    if (!link) {
        return null;
    }

    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.findOne({ link });

    if (data === null) {
        return null;
    }

    return data.url;
}
