import React, { FC } from 'react';
import { Home } from './Components/Home';
import { InstagramPost } from './Components/Instagram_Post';
import { Twitter_Header } from './Components/Twitter_Header';
import { Story } from './Components/Story';


import './style.css';

const defaultImage='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nO2ZOWgVURSGbzSS4BIR8tyChVEQREWwUbQRlWCnhSAIWqmISFoLQbEKEo2onWAhSEBBxK1UESxcGmOiIKiFO7hLNOLyySH/I9fJm/dm5i2Zkfc1ydw598z5OWfO3Hufc3Xq1PkvAFqATuAxcMNlDWABcBz4wgiPXBYAGoC1wFngF6PpdGkGmALsAAYIxzIz1aURYB7QBXzwAn4JnABeBIQccyksnw7gCvDbC/QasAGYCfRp7Ln+/rF3xqUBYLLKp98Lfgg4DSyRTc4T8RDo1v9Xxzp+C65d5fPeE/AKOAC0ena5gIg24Kmu14+lgFUFus89YCvQGLDNBURYeW3UtX0/xtU6+GYF+iBQPiZoecicUSI0fl1je8a6fF6rfHJF5oWJWKQX3FpuSy3L52eB8plQYm5BEQZwUuNHXQ3KJx+E8UOCVkT0UUzENGCwai0XmK1SeecJeKOSaovhJ1SEAezVvcuuRuVj34TmmL5KiRgPPNP9jkoE36TyuV+gfFYm9FlUhAFsqkjLDSmftyqfOWX4LSnCAG7KZrdLihZq/sfrrrLSlNjpaBF9Ye0YWCqbT7YaLueB+eUAKqmF5QiII8IATsmux5WDlgU9wDc5tJVpb1JBMUXkgO965vyyhAScdqmX5wVdstRX+p3w7PfJ9mJFRFRCUAIRjd6+Y13FhSQRFFeE5mz27BuqJiSqoCQiNO+W5uyquojAg2cAhwOCeqO+2AFfyzTno+0gqx994SBa9fH87LXtyJmQD9vmGt3VjTZaMNOBcwqoN2Zmh5TRdpcGlJ2vCmpxxDn7Jf6CSxPeiUfJrNimyzu3WuPShEplMEpWgC0SMVCTlhsXdbOSWQFuy26nSyNEyIqdpngtd5JLK5TICnBG9w+5NEORrACztNO0fc9cl3aAI4WyAhzU+HmXBRje2/yTFZ0D2KmLsdplBQJZAbbpuj+VLTdqVoA7ErLdZQ2Gt854x0p2NjzRZQ1GspKny2UVRrKSjZZbIitP7DfzUKM6deq4avEXfFisjrL4iOMAAAAASUVORK5CYII='



export const App: FC = () => {
  const [home, useHome] = React.useState(true);
  const [instagramPost, useInstagramPost] = React.useState(false);
  const [twitterHeader, useTwitterHeader] = React.useState(false);
  const [story, useStory] = React.useState(false);
  const [chatResponse, setChatResponse] = React.useState(null);
  const [userText, setUserText] = React.useState('')
  const[imageLink,setImageLink]=React.useState(null)

  const showInstagramPost = () => {
    useInstagramPost(true);
    useHome(false);
    useTwitterHeader(false);
    useStory(false);
  };

  const showTwitterHeader = () => {
    useHome(false);
    useTwitterHeader(true);
    useInstagramPost(false);
    useStory(false);
  };

  const showStory = () => {
    useStory(true);
    useHome(false);
    useTwitterHeader(false);
    useInstagramPost(false);
  };

  const ChatGptAPI = 'https://api.openai.com/v1/chat/completions';

  const keyAPI = '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'

  

  const optionsAPIChat = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${keyAPI}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
      { role: 'user', content: `Generate an ad about ${userText}. Provide the title, description, image description, and button text. The title should contain at most 4 words.The button text should contain two words at most. The description should have at most 3 lines without separation of ideas. The description should not contain any numbers or this character -.The image description should be as specific as posibile and should be relative for the add.`  },
      ],
      max_tokens: 500,
    }),
  };

  const fetchChatInformation = async () => {
   try{
      setUserText('')
      const response = await fetch(ChatGptAPI,optionsAPIChat);
      if (response.ok) {
      const data = await response.json()  
      console.log(data);
      setChatResponse(data);
      
      }
      else{
        console.log('Error in obtaining data:', response.status, response.statusText)
      }
    } catch (error) {
      console.log('Error in obtaining data:', error);
    }
  };

  const DalleAPI= 'https://api.openai.com/v1/images/generations'
  React.useEffect(() => {
    const fetchAPIImage = async (newImageContent) => {
      try {
        // Use the newImageContent in the optionsAPIImage
        const optionApiImage = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${keyAPI}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `Generate an image that closely resembles the following description:\n${newImageContent}\nEnsure the image is clear, high-quality, and aligns with the provided description.`,
          }),
        };

        const response = await fetch(DalleAPI, optionApiImage);

        if (response.ok) {
          const data = await response.json();
          setImageLink(data);
          console.log(imageLink);
        } else {
          console.log('Error in obtaining data:', response.status, response.statusText);
        }
      } catch (error) {
        console.log('Error in obtaining data', error);
      }
    };

    if (chatResponse && chatResponse.choices) {
      const newImageContent = chatResponse.choices[0].message.content
        .match(/Image Description:([\s\S]*?)Button Text:/)?.[1]
        .trim();

      // Call fetchAPIImage with the new image content
      fetchAPIImage(newImageContent);
    }
  }, [chatResponse]);

  return (
    <div>
      {home ? (
        <Home
          showInstagramPost={showInstagramPost}
          showTwitterHeader={showTwitterHeader}
          showStory={showStory}
        />
      ) : instagramPost ? (
        <InstagramPost fetchChatInformation={fetchChatInformation} chatResponse={chatResponse} setUserText={setUserText} userText={userText} 
         imageLink={imageLink} defaultImage={defaultImage}
        />
      ) : twitterHeader ? (
        <Twitter_Header fetchChatInformation={fetchChatInformation} chatResponse={chatResponse} setUserText={setUserText} userText={userText} 
         imageLink={imageLink} defaultImage={defaultImage} />
      ) : story ? (
        <Story fetchChatInformation={fetchChatInformation} chatResponse={chatResponse} setUserText={setUserText} userText={userText} 
         imageLink={imageLink} defaultImage={defaultImage}/>
      ) : null}
    </div>
  );
};
