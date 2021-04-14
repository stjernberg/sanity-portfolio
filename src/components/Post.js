import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import sanityClient from "../client.js"

export const Post = () => {

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
      }`
)
.then((data) => setPostData(data))
.catch(console.error);
}, []);

  return (
    <Main>
      <section>
        <h1>Blog Post Page</h1>
          <h2>Welocome to my page of blog posts</h2>
            <div>
              {postData && postData.map((post, index) => (
            <article>

              <PageLink to={"/post/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <Img 
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}/>
                <span>
                  <Title>{post.title}</Title>
                </span>
              </span>
              </PageLink>
            </article>
           )) }
            </div>
      </section>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 250px;
`
const Title = styled.h3`
  text-decoration: none;
`
const PageLink = styled(Link)`
  text-decoration: none;
  color: #000;
`