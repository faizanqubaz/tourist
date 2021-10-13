import NavbarComponent from './component/Navbar/Navbar';
import {Switch,Route} from 'react-router-dom'
import SliderComponent from './component/Slider/Slider';
import Adventure from './component/Adventure/Adventure';
import VideoContainer from './component/VideoContainer/VideoContainer';
import Map from './component/Maps/Map';
import FormComponent from './component/Form/FormComponent'
import Footer from './component/Footer/Footer';
import {useSelector} from 'react-redux';
import FormSigIn from './component/SignIn/Sigin'

function App() {
  const selector=useSelector((state)=>state)
  console.log('selector',selector)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <NavbarComponent name='TOURISM' />
     <SliderComponent />
     <Adventure name='Gilgit Adventure is Here.' />
     <VideoContainer name='Videos' />
        <Map /> 
        <FormComponent />
      <Footer />
        </Route>

        <Route path='/signin' component={FormSigIn} />

        
      </Switch>
     
      {/* <FormSigIn /> */}
    </div>
  );
}

export default App;
