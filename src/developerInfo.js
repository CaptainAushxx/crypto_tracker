import {ThemeProvider,Typography,createTheme,Button,Container} from '@material-ui/core';
import GithubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import BlogIcon from '@mui/icons-material/Web';

const darkTheme = createTheme({

    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const DeveloperInfo= ()=>{
    return(<ThemeProvider theme={darkTheme}>
      <Container>
        <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
          color: "gold",
          
          fontFamily: "Montserrat",
        }} 
        >
        <div>
          About Me
        </div>
        </Typography>
        <div>
          <p>Hi! I'm Ayush Mandal</p><p>Here are my blog & social links </p>
        </div>
        <div>
          <Button variant='text' size='large' href='https://www.instagram.com/aayyusssh/' startIcon= {<InstagramIcon/>}></Button>
          <Button variant='text' size='large' href='https://marathonfox.com/' startIcon= {<BlogIcon/>}></Button>
        </div>
        
        </Container>
    </ThemeProvider>
    );
  }

  export default DeveloperInfo;


