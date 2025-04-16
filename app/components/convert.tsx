"use client";

import {useState} from "react";
import {Button, TextField} from "@mui/material";
import createNewLink from "@/app/lib/create-link";
import Link from "next/link";
import urlValidation from "@/app/lib/url-validation";
import linkValidation from "@/app/lib/link-validation";


export default function Convert() {

    const [url, setUrl] = useState("")
    const [link, setLink] = useState("")
    const [result, setResult] = useState("")
    const [error, setError] = useState("")

    return(
        <>
            <form
                className="w-100 rounded-xl p-4 bg-rose-200"
                onSubmit={async(e) => {
                    e.preventDefault();

                    const validURL = await urlValidation(url);
                    if (!validURL) {
                        setError("Invalid URL.");
                        return;
                    }

                    const validLink = await linkValidation(link);
                    if (!validLink) {
                        setError("Shortened URL already exists.");
                        return;
                    }

                    createNewLink(url, link)
                        .then((res) => {
                            setResult(`https://url-shorting-app.vercel.app/${res.link}`);
                            setError("");
                        })
                        .catch((e) => {
                            setError(e.message);
                            console.error(e);
                        });
                }}
            >
                <TextField
                    variant="filled"
                    sx={{ backgroundColor: "white", width: "100%", mb: 2 }}
                    label="URL"
                    type="url"
                    placeholder="https://www.example.com/longURL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <TextField
                    variant="filled"
                    sx={{ backgroundColor: "white", width: "100%", mb: 3 }}
                    label="Custom Alias"
                    type="text"
                    placeholder="your-custom-alias"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
                <div className="w-full flex justify-center">
                    <Button
                        sx={{ width: "100%", backgroundColor: "red", padding: "0.75vw"}}
                        variant="contained"
                        type="submit"
                        disabled={url === "" || link === "" }
                    >
                        Shorten
                    </Button>
                </div>

                <div className="w-full items-center my-4 p-1 font-bold text-l text-red-600 ">
                    {error ? error : ""}
                </div>

                {result ? (
                    <div className="w-full block m-2">
                        <p className="text-gray-700 font-bold text-xl mb-1 w-full"> Shortened URL:</p>
                        <Link
                            href={`/${link}`}
                            target="_blank"
                            className="bg-amber-100 w-full px-2 py-1 font-bold text-blue-600 hover:underline rounded"
                        >
                            {result}
                        </Link>
                    </div>
                ) : "" }
            </form>
        </>
    );
}