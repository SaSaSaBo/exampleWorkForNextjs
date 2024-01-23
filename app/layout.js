import { Inter } from "@next/font/google";
import "@/styles/reset.css"
import "@/styles/global.css"
import Header from '@/components/header'
import Footer from '@/components/footer'

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <head><title>MOVIELND</title></head>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
