import React from 'react';

import Layout from '../../../components/Layout';
import { fetchGet } from '../../../utils/fetch';
import Article from '../../../components/Article';
import API from '../../../constants/api';

function BlogsOfHashtag(props){
  const { posts = [], hashtag } = props;

  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 40}}>
          <div className="container">
            <h1>#{hashtag}</h1>
            <div className="article-block">
            {posts.map(data =>
              <Article {...data} key={`blog-${data.postId}`}/>
            )}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .article-block {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { param } = context.params;
  const apiRes = await fetchGet(`${API}/post/hashtag/${encodeURI(param)}`);

  return {
    props: {
      posts: apiRes ? apiRes.result.result : [],
      hashtag: param
    }
  }
}

export default BlogsOfHashtag;