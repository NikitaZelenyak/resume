import { AboutPage } from "pages/AboutPage/AboutPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
import { HomePage } from "pages/HomePage/HomePage";
import { ProjectsPage } from "pages/ProjectsPage/ProjectsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { ThemeProvider } from "styled-components";
import { Footer } from "./Footer/Footer";


export const App = () => {
  const theme = {
    bg: 'black',
    textColor: 'white',
    hoverColor: '#ff8400b8',
    activeLink: '#ff8400',
    hoverTextColor: 'black',
    
  }
  return (
    <ThemeProvider theme={theme}>
    <><Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/projects' element={<ProjectsPage></ProjectsPage>}></Route>
         <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
        </Routes>
        <Footer> </Footer>
    </></ThemeProvider>
  );
};
