import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchAPI } from "../lib/api";
import Head from "next/head"; 
import Layout from "../components/layout";

export default function Home({ data, locale }) {
  const { t } = useTranslation();

  // Arka plan resmi URL'si
  const backgroundImage = "https://swiperjs.com/demos/images/nature-1.jpg";
  useEffect(() => {
    if (typeof Swiper === "undefined") {
      return;
    }

    new Swiper(".swiper-container", {
      // Swiper ayarları
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      fullscreen: true,
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{t("app_title")}</title> 
      </Head>
      {/* <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
        >
          <div className="flex h-full items-center justify-center swiper-container">
            <div className="swiper-wrapper"> 
              <div className="swiper-slide flex justify-center items-center h-full">
                Slayt 1 İçeriği
              </div>
              <div className="swiper-slide flex justify-center items-center h-full">
                Slayt 2 İçeriği
              </div> 
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
} 

export const getServerSideProps = async (context) => {
  const { locale } = context;
  const data = await fetchAPI("Blog/GetBlogs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
      locale,
    },
  };
};
