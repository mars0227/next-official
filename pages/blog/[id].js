import React from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
import { fetchGet } from '../../utils/fetch';
import API from '../../constants/api';

import './ck-content.css';

function Post (props) {
  const { post = {} } = props;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta itemProp="name" content={post.title}/>
        <meta itemProp="description" content={post.description}/>
        <meta itemProp="image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:url" content={`https://www.sgs-vircon.com/blog/${post.postId}`} />
        <meta property="og:image" content={post.image} />
        <meta property="og:description" content={post.description} />
      </Head>
      <Layout>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body" style={{ alignItems: 'flex-start', marginTop: 40, justifyContent: 'center'}}>
            <div className='container'>
              {post && <div className='content ck-content' dangerouslySetInnerHTML={{ __html: post.fullText }} />}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const apiRes = await fetchGet(`${API}/${id}`);

  return {
    props: {
      post: apiRes ? apiRes.result.result : {}
    }
  }
}

export default Post;