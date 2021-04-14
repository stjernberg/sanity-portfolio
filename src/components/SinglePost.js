import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = source => {
  return builder.image(source)
}

export const SinglePost = () => {

  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);


  if (!singlePost) return <div>Loading...</div>
  return (
    <main>
      <h1>{singlePost.title}</h1>
      <div>
        <img src={urlFor(singlePost.authorImage).url()}
          alt={singlePost.name} />
        <p>{singlePost.name}</p>
      </div>
      <img src={singlePost.mainImage.asset.url}
        alt={singlePost.title} />
      <BlockContent
        blocks={singlePost.body}
        projectId="ezpldtln"
        dataset="production" />
    </main>
  )
}