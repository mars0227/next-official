import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { fetchGet } from '../../utils/fetch';
import API from '../../constants/api';

const Article = ({ title, image, createdAt, postId }) => (
  <>
    <Link href={'/blog/[id]'} as={`/blog/${postId}`}>
      <a className="card article">
        <div className="card-image">
          <figure className="image is-5by3" style={{ overflow: 'hidden' }}>
            <img src={image} style={{ maxWidth: '100%', height: 'auto' }}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {title}
          </div>
        </div>  
        <footer className="card-footer" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
          <div className="card-footer-item" style={{ justifyContent: 'flex-start' }}>
            {`${createdAt.split('T')[0]} ${createdAt.split('T')[1].split('.')[0]}`}
          </div>
        </footer>
      </a>
    </Link>
    <style jsx>{`
      .article {
        width: 100%;
        margin: 20px 0px;
        cursor: pointer;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      @media only screen and (min-width: 770px) {
        .article {
          width: 360px;
          margin: 20px calc(50% / 2 - 180px);
        }
      }
      @media only screen and (min-width: 1420px) {
        .article {
          width: 360px;
          margin: 20px calc(50% / 3 - 180px);
        }
      }
      `}</style>
  </>
);

function Blogs(props){
  const { posts = [] } = props;

  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 40}}>
          <div className="container article-block">
            {posts.map(data =>
              <Article {...data} key={`blog-${data.postId}`}/>
            )}
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

export async function getServerSideProps() {
  const apiRes = await fetchGet(`${API}/post`);

  return {
    props: {
      posts: apiRes ? apiRes.result.result : []
    }
  }
}

export default Blogs;