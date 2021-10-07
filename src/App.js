import NavbarComponent from './component/Navbar/Navbar';
import SliderComponent from './component/Slider/Slider';
import Adventure from './component/Adventure/Adventure';
import VideoContainer from './component/VideoContainer/VideoContainer';
import Map from './component/Maps/Map';
import FormComponent from './component/Form/FormComponent'
import Footer from './component/Footer/Footer'
function App() {
  return (
    <div className="App">
     <NavbarComponent name='TOURISM' />
     <SliderComponent />
     <Adventure name='Gilgit Adventure is Here.' />
     <VideoContainer />
        <Map /> 
        <FormComponent />
      <Footer /> 
    </div>
  );
}

export default App;
