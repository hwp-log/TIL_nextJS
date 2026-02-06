"use client";
// 로그인 버튼을 클릭 했을시, 메인페이지랑 같은 내용을 랜더링.
// 모달 부분은 (.)i/flow/login
// 새로고침,주소입력은 i/flow/login
// 으로 이동해서 표시해준다.

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Main from "@/app/(beforeLogin)/_component/Main";

// 구버전 url로 처리되도 신버전 url로 리다이렉트
// -> redirect 사용시, 서버쪽 요청으로 인해, 인터셉팅 되는 것이 아닌, 새로운 페이지로 이동하게 된다.
// -> 따라서 해당 페이지를 인터셉팅 해주기 위해 클라이언트 컴포넌트로 변경해준다. (use client)
// -> 또한 redirect대신 useRouter hook을 사용해준다.

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login"); // 화면 다 그린 후 이동
  }, [router]); // [router] : 처음 랜더링 끝나면 실행하고, router 바뀌면 또 실행해줘 라는 뜻

  return (
    <Main />
  );
}