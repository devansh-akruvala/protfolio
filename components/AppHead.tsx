import Head from "next/head";

export interface Meta {
  description?: string;
  author?: string;
}

type Props = {
  title: string;
  meta?: Meta;
 };

const AppHead: React.FC<Props> = ({
  title,
  meta,
}) => {
  let author = "Devansh Akruvala";
  let description ="";

  if (meta) {
    author = meta.author ? meta.author : author;
    description = meta.description ? meta.description : description;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
};

export default AppHead;
