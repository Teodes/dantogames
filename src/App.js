import "./App.scss";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import LandingContainer from "./Components/Landing/LandingContainer";

function App() {
  //   const db = getFirestore();
  //   const newsCollection = collection(db, "news");
  //   addDoc(newsCollection, {
  //     img: "http://www.monomipark.com/img/mp_logo.png",
  //     titulo: "ADIOS",
  //     subtitulo: "Bienvenidos a mi primera noticia",
  //     cuerpo:
  //       "Reprehenderit ullamco magna ex occaecat ullamco officia cillum culpa consectetur. Labore adipisicing incididunt dolor voluptate do ullamco pariatur minim do sint. Aliqua proident consectetur magna culpa ut officia ex tempor ea pariatur exercitation. Reprehenderit anim nisi proident tempor. Laborum adipisicing laboris labore voluptate reprehenderit tempor duis est sunt. Deserunt magna incididunt enim qui id enim in id. Ad laborum consectetur mollit sit eiusmod ullamco reprehenderit voluptate est tempor.",
  //   })
  // }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingContainer />} />
        <Route path="*" element={<div>NO CONTENT: 404</div>} />
      </Routes>

      <Contact />
    </div>
  );
}

export default App;
