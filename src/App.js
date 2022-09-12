import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';

function App() {
  {/* State variables here ... */}
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar />
    </div>
  );

}

export default App;


