import { useEffect } from 'react';

const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = 'AnimoreVN - ' + title;

    return () => {
      document.title = 'AnimoreVN - Nơi lưu trữ anime đa nền tảng của bạn';
    };
  }, [title]);
};

export default useSetDocumentTitle;
