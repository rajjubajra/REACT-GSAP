import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';
import Footer from './components/Footer';
import Center from './components/Center';
import Slider from './components/Slider';



function App() {
  return (
    <div className="m-0 h-screen flex flex-col">
      <Header />
      <div className="flex justify-between flex-grow">
        <Left />
        <Slider />
        <Center />
        <Right />
      </div>
      <Footer />
      
      
      
      
    </div>
  );
}

export default App;
