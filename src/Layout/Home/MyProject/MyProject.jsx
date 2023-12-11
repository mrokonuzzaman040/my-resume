import React from "react";

const MyProject = () => {
    return (
        <div className="w-full max-w-[85rem] mx-auto mt-10">
            <div className="mb-10">
                <h2 className="text-2xl font-black">Projects</h2>
                <h1 className="uppercase text-4xl text-gray-300">MY CREATION</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3 glass rounded-xl bg-slate-50 p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold uppercase text-xl">Ecommerce Website</h2>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-500"
                        >
                            <FaExternalLinkAlt className="text-xl"></FaExternalLinkAlt>
                        </a>
                        
            </div>
        </div>
    );
};

export default MyProject;
