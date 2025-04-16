"use server";

export default async function urlValidation(url: string): Promise<boolean>{
    try{
        const res = await fetch(url)
        return res.status >= 200 && res.status < 400;
    }
    catch(e){
        console.error(e);
        return false;
    }
}