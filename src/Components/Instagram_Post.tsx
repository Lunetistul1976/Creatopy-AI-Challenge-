import styled from 'styled-components'
import '../CSS/Instagram_Post.css'


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

interface InstagramProps{
  fetchChatInformation: () => void;
  setUserText: (text:string) => void;
  userText: string
  chatResponse: ChatResponse;
  imageLink: ImageLink;
  defaultImage:string
}

const StyledDescription=styled.p`
position:relative;
bottom:2.304vw;
font-size:1.119vw;
color:#edefee;
font-weight:medium;
margin-left:1.053vw;
`;

const StyledButton=styled.button`
width: 7.924vw;
height: 2.438vw;
color: #edefee;
background-color:#daa520 ;
position:relative;
bottom:0.987vw;
border-radius:1.317vw;
font-weight:bold;
cursor:pointer;
font-size:1.053vw;
`;

const StyledTitle=styled.h1`
font-size: 1.975vw;
font-familty:Roboto;
color:#edefee;
`;


const StyledImage=styled.img`
width:23.56vw;
height:15.685vw;
margin-bottom:2vw;
position:relative;
bottom:1vw;
`;

const StyledBannerPost=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#7b68ee;
width:32.916vw;
height:32.916vw;
margin-top:0.329vw; 
border-radius:1.317vw;
`;



const StyledTextInput = styled.textarea`
  padding: 0.658vw;
  border: 1px solid #ccc;
  border-radius: 0.658vw;
  font-size: 1.053vw;
  width: 32.916vw; /* Adjust the width according to your preference */
  height: 3.292vw;
  outline: none;
  background-color:#282828;
  color: #edefee;
  font-weight:medium;
  margin-left:1.975vw;
  padding-top: 0.987vw;
  padding-right: 2.633vw;

  &:focus {
    border-color: #007bff; /* Change the border color on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a subtle box shadow on focus */
  }
  
  &::placeholder {
   position:relative;
   top: 0.066vw;
   left:0.132vw;
  }
`;









export const InstagramPost: React.FC<InstagramProps> = ({fetchChatInformation,chatResponse,setUserText,userText,imageLink,defaultImage}) => {
  
  const handleTextChange =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setUserText(e.target.value)
   
  }

  const handleButtonClick= ()=> {
  fetchChatInformation()
  }
  
  const titleContent = chatResponse && chatResponse.choices 
  ? chatResponse.choices[0].message.content
      .match(/Title:(.*?)(?=Description:)/s)?.[1]
      .trim().replace(/"/g, '')
  : 'Title of the ad';


  const descriptionContent =
  chatResponse && chatResponse.choices
    ? chatResponse.choices[0].message.content
    .match(
      /Description:[\n\s]*([\s\S]*?)\n\s*Image Description:/s)?.[1]
      .replace(/"/g, '')
      .trim()
    : 'This is the description of the ad.';

const imageContent= imageLink?imageLink.data[0].url:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

console.log('The image URL is: ', imageContent)

  const buttonTextContent = chatResponse && chatResponse.choices 
  ? chatResponse.choices[0].message.content
  .match(/Button Text: "(.*?)"/)?.[1]
  .trim().replace(/"/g, '')
  :'Register'
  return (
    <div className='Instagram-Post-Container'>
      <div className='Instagram-Post-flex'>
        <div>
          <StyledBannerPost>
            <StyledTitle>{titleContent}</StyledTitle>
           
           <StyledDescription>
            {descriptionContent}
            </StyledDescription>
          
          
            <StyledImage
              src={imageContent}
              alt='post'
            />
            <StyledButton>{buttonTextContent}</StyledButton>
          </StyledBannerPost>
        </div>
        <div className='Input'>         
        <StyledTextInput 
        value={userText}
        onChange={handleTextChange}
        placeholder='Your add description' />
        {defaultImage?<img className='Text-Input-Image' src={defaultImage} alt='send' onClick={handleButtonClick} style={{ 'width': '1.975vw',
    'height': '1.975vw','position': 'relative','bottom': '0.658vw','right': '3.423vw','transition': '0.3s ease-in'}} />:null}
        <span className='Hover-text'>Generate</span>
          
        </div>
      </div>
    </div>
  );
}