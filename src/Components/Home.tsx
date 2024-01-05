import styled from 'styled-components'
import '../CSS/Home.css'

const StyledTitle=styled.h1<{ isbannerheader?: boolean }>`
font-size: 1.448vw;
font-familty:Roboto;
color:#edefee;
@media (max-width: 768px) {
  
  margin-top: ${({ isbannerheader }) => (isbannerheader ? '3vw' : '0')};
`;

const StyledBanner = styled.div`
  width: 26.991vw;
  height: 26.991vw;
  background-color:rgb(0,0,0,0.3);
  border-radius: 1.317vw;
  padding-top: 0.658vw;
  transition: transform 0.3s ease; 
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;


const StyledImage=styled.img`
width:16.458vw;
height:16.458vw;
margin-bottom:0.658vw;
position:relative;
bottom:0.987vw;
`;

const StyledImageHeader=styled.img`
width:11.85vw;
height:7.9vw;
position:relative;
right:0.329vw;
`;

const StyledImageStory=styled.img`
width:11.85vw;
height:15.142vw;
position:relative;
bottom:1.646vw;
`

const StyledRow=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:3.292vw;
margin-top:3.95vw;
`;
const StyledBannerPost=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#7b68ee;
width:23.041vw;
height:23.041vw;
margin-left:1.975vw;
margin-top:0.329vw;
border-radius:0.987vw; 
`;

const StyledBannerHeader=styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#ff6700;
width:25.675vw;
height:8.558vw;
margin-left:0.658vw; 
margin-top:7.242vw;
border-radius:0.658vw;
`;

const StyledBannerStory=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:red;
width:13.167vw;
height:23.7vw;
margin-left:7.242vw;
margin-top:1.317vw;  
position:relative;
bottom:0.658vw;
border-radius:0.658vw;
`;

const StyledButton=styled.button<{isbutton?:boolean}>`
width:6.583vw;
height:3.292vw;
color: #edefee;
background-color:#daa520 ;
position:relative;
bottom:0.987vw;
border-radius:1.317vw;
font-weight:bold;
font-size:1.053vw;
@media (max-width:768px){
  padding-right: ${({isbutton})=>(isbutton?'25px':'0px')};
  text-wrap:${({isbutton})=>(isbutton?'nowrap':'wrap')};
}
`;


const StyledButtonHeader=styled.button`
width:6.583vw;
height:1.975vw;
color: #edefee;
background-color:green;
position:relative;
bottom:0.875vw;
border-radius:0.987vw;
font-weight:bold;
font-size:1.053vw;
@media (max-width: 768px) {
  /* Adjust the values for small screens */
  bottom: 3vw;
  padding-right:30px;
  padding-bottom:6px;
}`;

const StyledBannerInfo=styled.div`
font-weight:500;
position:relative;
bottom:1.317vw;
left:2.041vw;
font-size:1.053vw;
`;
const StyledDescription=styled.p`
position:relative;
bottom:1.317vw;
font-size:0.922vw;
color:#edefee;
font-weight:medium;
`;

interface HomeProps {
  showInstagramPost: () => void;
  showTwitterHeader: () => void;
  showStory: () => void;
  
}

  export const Home: React.FC<HomeProps> = ({showInstagramPost,showTwitterHeader, showStory}) =>{
  return(
  <div className='Home-BG'> 
<h1 style={{'marginTop':'0.329vw','fontWeight':'bold','fontSize':'1.58vw'}}> SELECT A TEMPLATE </h1>

<StyledRow>
<StyledBanner onClick={showInstagramPost}>
  
  <StyledBannerPost>
  <StyledTitle>Title of the add</StyledTitle>
  <StyledDescription>This is the description of the add</StyledDescription>
  <StyledImage src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <StyledButton isbutton>Register</StyledButton>
  </StyledBannerPost>
  <StyledBannerInfo style={{'position':'relative','bottom':'1.58vw'}}>
  <p style={{'position':'relative','top':'0.329vw'}}>Instagram Poster</p>
  <p style={{'position':'relative','bottom':'0.658vw'}}>500 X 500 px</p>
  </StyledBannerInfo>

 
 
</StyledBanner>  

<StyledBanner onClick={showTwitterHeader}>
  <StyledBannerHeader>
  <div className='Twitter-Header-Info'>
  <StyledTitle isbannerheader>Title of the add</StyledTitle>
  <StyledDescription style={{'bottom':'0.461vw'}}>This is the description of the add</StyledDescription>
  <StyledButtonHeader>Download</StyledButtonHeader>
  </div>
  <StyledImageHeader src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  
  </StyledBannerHeader>
  <StyledBannerInfo style={{'marginTop':'8.262vw','marginRight':'0.79vw'}}>
  <p style={{'position':'relative','top':'0.329vw'}}>Twitter Header</p>
  <p style={{'position':'relative','bottom':'0.658vw'}}>1500 X 500 px</p>

  </StyledBannerInfo>

</StyledBanner>  


<StyledBanner onClick={showStory}>
  <StyledBannerStory>
  <StyledTitle>Title of the add</StyledTitle>
  <StyledDescription style={{'marginLeft':'0.527vw'}}>This is the description of the add</StyledDescription>
  <StyledImageStory src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <StyledButton isbutton>Sign up</StyledButton>
  </StyledBannerStory>
  <StyledBannerInfo style={{'position':'relative','bottom':'3.292vw'}}>
  <p style={{'position':'relative','top':'0.329vw'}}>Story</p>
  <p style={{'position':'relative','bottom':'0.658vw'}}>1080 X 1920 px</p>

  </StyledBannerInfo>

</StyledBanner>  
  
</StyledRow>

  </div>
  )
}