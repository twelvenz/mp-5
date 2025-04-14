import Convert from "@/app/components/convert";

export default function MainContent() {
    return (
        <>
            <div className="w-100 mx-auto">

                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        URL Shortener
                    </h1>
                    <p className="text-gray-600 mb-5">
                        Shorten your links!
                    </p>
                    <Convert/>
                </div>
            </div>
        </>
    );
}