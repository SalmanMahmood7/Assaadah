import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
