import './App.css';

import BlogTile from './Components/BlogTile';
import UuidGen from './Components/UuidGen';
import Ftimer from './Components/Ftimer';
import Ctimer from './Components/Ctimer';

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {
  return (
    <div className="App">
      {posts.map((elem) => (
        <BlogTile
          key={`tileId-${elem.id}`}
          title={elem.title}
          intro={elem.intro}/>
      ))}
      <UuidGen />
      <Ftimer />
      <Ctimer />
    </div>
  );
}

export default App;
