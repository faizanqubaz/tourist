import NavbarComponent from './component/Navbar/Navbar';
import SliderComponent from './component/Slider/Slider';
import Adventure from './component/Adventure/Adventure';
import VideoContainer from './component/VideoContainer/VideoContainer';
import Map from './component/Maps/Map';
import FormComponent from './component/Form/FormComponent'
import Footer from './component/Footer/Footer'
import Signupform from './component/Signupform/Signup';
import {Route, Switch}  from 'react-router-dom';

function App() {
  return (
    <div ClassName="App"> 
  <Switch>
  <Route exact path='/'>
   
   <NavbarComponent name='TOURISM' />
   <SliderComponent />
   <Adventure name='Hunza Adventure is Here.' />
   <VideoContainer />
      <Map /> 
      <FormComponent />
    <Footer /> 

   </Route>
  <Route path="/signup" component={Signupform} />


  </Switch>
 
     
  </div>
  );
}

export default App;
