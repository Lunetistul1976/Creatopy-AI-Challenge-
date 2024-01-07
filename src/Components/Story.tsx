import styled from 'styled-components'
import '../CSS/Story.css'



interface ChatResponse{
  choices:{
    message:{
      content:string;
    }
  }
  }
  interface ImageLink{
    data:{
      url:string;
    }
  }
  
  interface StoryProps{
    fetchChatInformation: () => void;
    setUserText: (text:string) => void;
    userText: string
    chatResponse: ChatResponse;
    imageLink: ImageLink;
    defaultImage:string;
  }


  const StyledImageStory = styled.img`
  width: 63.989vw;
  height: 42.66vw;
  margin-bottom: 5.267vw; 
  
  
`;

const StyledBannerStory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 71.099vw;
  height: 126.399vw;
  margin-top: 2.633vw;
  margin-bottom:0.658vw; 
  border-radius: 0.658vw;
`;

const StyledTitle = styled.h1`
  font-size: 4.872vw;
  font-family: Roboto;
  color: #edefee;
  margin-bottom: 16.458vw; 
  text-align: center;
`;

const StyledDescription = styled.p`
  font-size: 2.502vw;
  color: #edefee;
  font-weight: medium;
  margin-bottom: 16.458vw; 
  text-align: center;
`;

const StyledButton = styled.button`
  width: 31.073vw;
  height: 10.257vw;
  font-size: 2.633vw;
  color: #edefee;
  background-color: #daa520;
  border-radius: 3.95vw;
  font-weight: bold;
  margin-bottom: 4.279vw;
  position:relative;
  bottom:0.975vw;
`;

const StyledTextInput = styled.textarea`
  padding: 0.658vw;
  border: 0.066vw solid #ccc;
  border-radius: 0.658vw;
  font-size: 1.053vw;
  width: 32.916vw;
  height: 3.292vw;
  outline: none;
  background-color: #282828;
  color: #edefee;
  font-weight: medium;
  padding-top: 0.987vw;
  padding-right: 2.633vw;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    margin-top: 0.066vw; 
    margin-left: 0.132vw; 
  }
`;


export const Story: React.FC<StoryProps> = ({fetchChatInformation,chatResponse,setUserText,userText,imageLink,defaultImage}) =>{
  const handleTextChange =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setUserText(e.target.value)
   
  }

  const handleButtonClick= ()=> {
  fetchChatInformation()
  }


  const titleContent = chatResponse && chatResponse.choices 
  ? chatResponse.choices[0].message.content
      .match(/Title:(.*?)(?=Description:)/is)?.[1]
      .trim().replace(/"/g, '')
  : 'Title of the ad';

  const descriptionContent =
  chatResponse && chatResponse.choices
    ? chatResponse.choices[0].message.content
        .match(/Description:[\s]*(.*?)(?=Image Description:)/is)?.[1]
        .replace(/"/g, '')
        .trim()
    : 'This is the description of the ad.';

const imageContent= imageLink?imageLink.data[0].url:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

console.log('The image URL is: ', imageContent)

const buttonTextContent = chatResponse && chatResponse.choices ? 
chatResponse.choices[0].message.content
.match(/Button\s*Text:\s*"?([^"]*)"?/is)?.[1]
.trim().replace(/"/g, '')
  :'Sign up';
  return(
    <div>
      <div className='Story-flex'>
    <div className='Story-Content'>
  <StyledBannerStory>
  <div className='Story-Info'>
  <StyledTitle>{titleContent}</StyledTitle>
  <StyledDescription >{descriptionContent}</StyledDescription> 
  {chatResponse?<StyledImageStory src={imageContent} alt='template' style={{'marginLeft':'3.654vw','marginTop':'-6.583vw'}}/>:<StyledImageStory src={imageContent} alt='template'/>}
  </div>
  <StyledButton>{buttonTextContent}</StyledButton>
  </StyledBannerStory>
  </div>
  <div className='Input'>
  <StyledTextInput value={userText}
        onChange={handleTextChange}
        placeholder='Your ad description' />

    {defaultImage?<img className='Text-Input-Image' src={defaultImage} alt='send' onClick={handleButtonClick} style={{ 'width': '1.975vw',
    'height': '1.975vw','position': 'relative','bottom': '0.658vw','right': '3.423vw','transition': '0.3s ease-in'}}
    />:null}
    <span className='Hover-text'>Generate</span>
  </div>
  </div>
    </div>
  )
}