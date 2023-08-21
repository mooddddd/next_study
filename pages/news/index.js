import Link from 'next/link';
import { Fragment } from 'react'; // 얘를 왜 쓰지?

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href='/news/first'>첫번째 뉴스</Link>
        </li>
        <li>
          <Link href='/news/second'>두번째 뉴스</Link>
        </li>
        <li>
          <Link href='/news/newjeans'>뉴진스</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;

/*
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <a href='/news/first'>첫번째 뉴스</a>
        </li>
        <li>
          <a href='/news/second'>두번째 뉴스</a>
        </li>
        <li>
          <a href='/news/newjeans'>뉴진스</a>
        </li>
      </ul>
    </Fragment>

이렇게 하면 싱글페이지라고 할 수 없음! 경로를 아예 이동시키기 때문
=> a엘리먼트 대신 next/link 하위 패키지의 Link를 사용하면 됨
이렇게 사용할 경우 링크는 바뀔 수 있겠지만 하나의 페이지에서 움직이는 것이기 때문에 진짜로 브라우저가 새로 요청을 해서 받아오는 로직이 아님
*/
