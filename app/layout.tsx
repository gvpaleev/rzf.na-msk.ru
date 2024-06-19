import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Banner } from "@/entities/Banner";
import classNames from "classnames";
import styles from './page.module.css'
import Footer from "@/components/Header/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "АН в обществе. О сообществе «Анонимные Наркоманы»",
  description: "АН в обществе. О сообществе «Анонимные Наркоманы»",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className, styles['item'])}>
        <Banner />
        <Footer />
        {children}
      </body>
    </html>
  );
}
