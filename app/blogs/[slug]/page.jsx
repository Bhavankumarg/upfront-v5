'use client'
import React from 'react';
import Posts from './Blogpost'; // Adjust the import path accordingly

const Page = async ({ params }) => {
    const { slug } = await params; // Ensure params is awaited if it's asynchronous

    return (
        <>
            <div>
                <Posts slug={slug} />
            </div>
        </>
    );
};

export default Page;
