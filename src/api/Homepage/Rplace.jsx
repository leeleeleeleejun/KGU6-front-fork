export const Rplace = async () => {
    try {
  
      // API 요청
      const response = await fetch('http://ec2-52-79-249-37.ap-northeast-2.compute.amazonaws.com/api/core/travelog?sortBy=likes', {
        method: 'GET',
      });
  
      // 응답 처리
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error);
      }
  
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };