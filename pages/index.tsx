import { NextPage } from 'next';
import Layout from 'src/components/Layout';
import HomePage from 'src/components/HomePage';

export const Page: NextPage = (): JSX.Element => {
  return (
    <Layout >
      <HomePage />
    </Layout>
  );
};

export default Page;
