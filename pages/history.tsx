import { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import HistoryPage from 'src/components/HistoryPage';

import {
  META_DESCRIPTION,
  META_TITLE,
} from 'src/constants/meta';

export const Page: NextPage = (): JSX.Element => {
  const historyTitle = `${META_TITLE} - history`;
  return (
    <>
      <Head>
        <title key="title">{historyTitle}</title>
        <meta property="og:title" content={historyTitle} key="ogTitle" />
        <meta name="description" content={META_DESCRIPTION} key="description" />
        <meta property="og:description" content={META_DESCRIPTION} key="ogDescription" />
        <meta key="twitterTitle" name="twitter:title" content={META_TITLE} />
        <meta key="twitterDescription" name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      <Layout >
        <HistoryPage />
      </Layout>
    </>
  );
};

export default Page;
