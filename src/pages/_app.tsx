import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { AuthenticationProvider } from "../store/auth-context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthenticationProvider>
  );
}
