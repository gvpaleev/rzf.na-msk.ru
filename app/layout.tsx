import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Banner } from "@/entities/Banner";
import classNames from "classnames";

import styles from './layout.module.css'
import Header from "@/widgets/Header/Header";
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
        <Banner className={classNames(styles['banner'])} />
        {/* <Footer /> */}
        <main className={classNames(styles['main'])}>
          <Header />
          {children}

        </main>
        <footer className={classNames(styles['footer'])}>
          footer
        </footer>
      </body>

    </html>
  );
}
