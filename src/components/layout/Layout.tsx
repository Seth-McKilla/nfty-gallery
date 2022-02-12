import { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="threejs, react, showcase " />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
`;

export default Layout;
