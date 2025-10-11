import { useEffect, useState } from "react";

export const LoadingConditionallyRendering = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);

  async function getCommentsData() {
    setIsLoading(true);
    try {
      const comments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const response = await comments.json();

      setCommentsData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>İçerik Hazırlanıyor2</div>
      ) : (
        <div>
          {commentsData?.length > 0 ? (
            <div>Content {commentsData.length}</div>
          ) : (
            "Veri bulunamadı"
          )}
        </div>
      )}
    </>
  );
};
