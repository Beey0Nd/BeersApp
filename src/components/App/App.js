import { lazy, Suspense } from "react";
import { 
    BrowserRouter as Router, 
    Routes, 
    Route,
} from "react-router-dom";

import MainPage from "../Pages/MainPage";
import Spinner from "../Spinner/Spinner";
const BeerPage = lazy(() => import("../Pages/BeerPage"))

const App = () => {
  return (
    <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/beers/:beerId" element={<BeerPage/>}/>
                </Routes>
            </Suspense>
        </Router> 
    </div>
  )
}

export default App;
