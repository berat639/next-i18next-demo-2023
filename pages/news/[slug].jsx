import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchAPI } from "../../lib/api";
import Link from 'next/link';

export default function NewsDetail({ data }) {
  const { t } = useTranslation();
  return (
    <div className='mt-6 py-6 px-20'>
      <div className='flex justify-between'>
       
      </div>

      <article className='container'>
        <h1 className='mt-6 text-4xl font-bold'>{data.title}</h1>
        <div className='mt-6'>
        <div dangerouslySetInnerHTML={{__html: data.content}} /> 
        </div>
      </article>
    </div>
  );
}

export const getStaticPaths = async ({ locales }) => {
  const res = await fetchAPI('Blog/GetBlogs');
  console.log("res::",res)
  const paths = res.flatMap((news) => {
    console.log("slug::",news)
    return locales.map((locale) => ({ 
      params: {
        slug: news.blogPostId.toString(),
      },
      locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const newsSlug = context.params.slug;
  const currentLocale = context.locale;

  const data = await fetchAPI(`Blog/GetBlogDetail/blogid/${newsSlug}`);  

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
      data,
    },
  };
};
