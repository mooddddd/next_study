import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const params = router.query.newsId;

  console.log(params);

  return <>중첩 라우팅</>;
};

export default DetailPage;
