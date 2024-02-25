import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Discover() {
    const router = useRouter();
    const [documents, setDocuments] = useState<any[]>([]);

    const [organization, setOrganization] = useState('');
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/get-roles`, { /*params: { organization: organization, roleName: roleName, description: description, city: city  } */})
                // console.log('get roles')
                const responseData = response.data;
                console.log(response);
                setDocuments(responseData || []);
            } catch (error) {
                console.log("ooo")
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        return () => {};
    }, [])

    return (
        <div className="min-h-screen flex flex-col pt-2 pr-14 pb-12 text-center whitespace-nowrap bg-black leading-[130%] max-md:pr-5">
            <div className="flex flex-col gap-5 justify-between w-full text-3xl text-white max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="max-w-full aspect-[1.89] w-[188px]"
                />
                <div className="grid grid-cols-1">
                    {/* {documents.length > 0 ? (
                        <ul>
                            {documents.map((document, index) => (
                                <li key={index}>
                                    <div>Title: {document.title}</div>
                                    <div>Description: {document.description}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No documents found.</p>
                    )} */}
                    {
                        documents.length > 0 ?
                            <ul>
                                {documents.map((document, index) => (
                                    <li key={index}>
                                        <div>Org: {document.organization}</div>
                                    </li>
                                ))}
                            </ul>
                        : <p>No documents</p>
                    }
                </div>
            </div>
            <div className="select-none self-center mt-52 text-[600px] text-slate-400 text-opacity-60 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                SEVA
            </div>
        </div>
    )
}
