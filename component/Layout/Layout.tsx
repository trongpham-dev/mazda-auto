import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
