import {redirect} from "next/navigation";
import getLinks from "@/app/lib/get-links";

export default async function RedirectPage({params}: {
    params: Promise<{ link: string }>;
}) {
    const { link } = await params;

    const url = await getLinks(link);
    if (url === null) {
        return redirect("/");
    }

    return redirect(url);
}