import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Explore = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Explore Minds On',
      }}
    >
      <h1>Mind Matrix</h1>
      <p>This is a digital publication for students in Peel that shares out-of-the-box news about pscyhology and the wonders of the mind. In the context of mental health, we write articles about global politics, relationships, technology and wellbeing. Some people say our minds take precedence, others say the world around us is critical: we said, <b>why not both?</b></p>
			{posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a><i>Read More</i></a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Explore;