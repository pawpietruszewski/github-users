import { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import HomePage from 'src/components/HomePage';

import {
  META_DESCRIPTION,
  META_TITLE,
} from 'src/constants/meta';

export const Page: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">{META_TITLE}</title>
        <meta property="og:title" content={META_TITLE} key="ogTitle" />
        <meta name="description" content={META_DESCRIPTION} key="description" />
        <meta property="og:description" content={META_DESCRIPTION} key="ogDescription" />
        <meta key="twitterTitle" name="twitter:title" content={META_TITLE} />
        <meta key="twitterDescription" name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      <Layout >
        <HomePage />
      </Layout>
    </>
  );
};

export default Page;
