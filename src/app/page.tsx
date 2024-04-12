"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 마운트되면 /introduce 로 강제 이동
    if (typeof window !== 'undefined') {
      // 페이지가 마운트되면 /introduce 로 강제 이동
      router.push('/IntroduceSetting');
    }
  }, []);

  return null; // 이 페이지에서 아무것도 렌더링하지 않음
};

export default Home;
