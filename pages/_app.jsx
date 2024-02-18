import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
      <SpeedInsights />
    </ThemeProvider>
  );
}
