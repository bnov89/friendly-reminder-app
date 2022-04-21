import React from 'react';
import App from "../App";
import { GetServerSideProps } from "next";

const HomePage: React.FC = () => {
  return <App/>
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default HomePage