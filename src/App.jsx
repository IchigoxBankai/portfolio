import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Cursor from "./components/Cursor/Cursor";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";

function App() {

  useEffect(() => {

    AOS.init({
      duration:900,
      once:true,
    });

  }, []);

  return (

    <Loader>

      

      <Home />

    </Loader>

  );

}

export default App;