import styled from 'styled-components'
import '../CSS/Twitter_Header.css'



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
  
  interface TwitterProps{
    fetchChatInformation: () => void;
    setUserText: (text:string) => void;
    userText: string
    chatResponse: ChatResponse;
    imageLink: ImageLink;
    defaultImage:string;
  }


  const StyledTitle = styled.h1`
  font-size: 3.094vw;
  font-family: Roboto;
  color: #edefee;
  margin-bottom: 4.608vw;
  margin-left:1.975vw;
  position:relative;
  bottom:1.317vw;
`;

const StyledImageHeader = styled.img`
  width: 44.437vw;
  height: 29.625vw; 
  justify-content: flex-end;
  margin-right: 0.987vw;
`;

const StyledBannerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6700;
  width: 98.749vw;
  height: 32.916vw;
  border-radius: 0.658vw;
  margin-top: 1.975vw;
  gap: 19.75vw;
`;

const StyledButtonHeader = styled.button`
  width: 16.359vw;
  height: 5.398vw;
  color: #edefee;
  background-color: green;
  border-radius: 1.317vw;
  font-weight: bold;
  font-size: 1.909vw;
  cursor: pointer;
  margin-left: 3.094vw;
  margin-bottom:0.658vw;
`;

const StyledDescription = styled.p`
  margin-bottom: 2vw; 
  font-size: 1.843vw;
  color: #edefee;
  font-weight: medium;
  padding-left:0.987vw;
  position:relative;
  bottom:1.975vw;
`;

const StyledTextInput = styled.textarea`
  padding: 0.658vw;
  border: 1px solid #ccc;
  border-radius: 0.658vw;
  font-size: 1.053vw;
  width: 32.916vw;
  height: 3.292vw;
  outline: none;
  background-color: #282828;
  color: #edefee;
  font-weight: medium;
  margin-left: 1.975vw;
  padding-top: 0.987vw;
  padding-right: 2.633vw;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    position: relative;
    top: 0.066vw;
    left: 0.132vw;
  }
`;



export const Twitter_Header: React.FC<TwitterProps> = ({fetchChatInformation,chatResponse,setUserText,userText,imageLink,defaultImage}) =>{

  const handleTextChange =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setUserText(e.target.value)
   
  }

  const handleButtonClick= ()=> {
  fetchChatInformation()
  }


  const titleContent = chatResponse && chatResponse.choices 
  ? chatResponse.choices[0].message.content
      .match(/Title:(.*?)(?=Description:)/s)?.[1]
      .replace(/"/g, '').trim()
  : 'Title of the ad';


  const descriptionContent =
  chatResponse && chatResponse.choices
    ? chatResponse.choices[0].message.content
    .match(
      /Description:[\n\s]*([\s\S]*?)\n\s*Image Description:/s)?.[1]
      .replace(/"/g, '') // Remove empty string
      .trim()
    : 'This is the description of the ad.';

const imageContent= imageLink?imageLink.data[0].url:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

console.log('The image URL is: ', imageContent)

  const buttonTextContent = chatResponse && chatResponse.choices 
  ? chatResponse.choices[0].message.content
  .match(/Button Text: "(.*?)"/)?.[1]
  .replace(/"/g, '').trim()
  :'Download'
  return(

    <div>
    <div className='Twitter-Header-flex-component'>
    <div>
  <StyledBannerHeader>
  <div >
  <StyledTitle>{titleContent}</StyledTitle>
  <StyledDescription >{descriptionContent}</StyledDescription> 
  <StyledButtonHeader>{buttonTextContent}</StyledButtonHeader>
  </div>
  {chatResponse?<StyledImageHeader src={imageContent} alt='template'/>:<StyledImageHeader src={imageContent} alt='template' style={{'marginLeft':'5.925vw'}}/>}
  
  </StyledBannerHeader>
  </div>
  <div className='Input'>
    <StyledTextInput value={userText}
        onChange={handleTextChange}
        placeholder='Your add description' />

    {defaultImage?<img className='Text-Input-Image' src={defaultImage} alt='send' onClick={handleButtonClick}
    style={{ 'width': '1.975vw',
    'height': '1.975vw','position': 'relative','bottom': '0.658vw','right': '3.423vw','transition': '0.3s ease-in'}}
    />:null}
    <span className='Hover-text'>Generate</span>
  </div>
  </div>
    </div>
  )
}