'use client'
import React from 'react';
import Posts from './ImpactStoriesPost'; // Adjust the import path accordingly

const Page = async ({ params }) => {
    const { slug } = await params; // Ensure params is awaited

    return (
        <>
            <div>
                <Posts slug={slug} />
            </div>
        </>
    );
};

export default Page;
