// src/utils/api.ts

export const fetchAnswer = async (question: string): Promise<string> => {
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCYh3sm2f6yd9mp0i6a1NmlIhJPZXSApcc';
  
  try {
      const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              contents: [
                  {
                      parts: [
                          { text: question }
                      ]
                  }
              ]
          })
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates[0]?.content?.parts[0]?.text || 'No response text available';
  
      return text;
  } catch (error) {
      console.error('Error fetching answer:', error);
      throw error;
  }
};
