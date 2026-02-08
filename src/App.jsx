import AppRouter from "./router/AppRouter";
import data from "../db.example.json";





function App() {
  const {artists,artworks,categories}=data

  
  return (
    <div>
     
    <AppRouter data={{artists, artworks, categories}} />
    </div>
  );
}

export default App;