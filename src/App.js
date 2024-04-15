import './App.css';
import { RouterProvider} from "react-router-dom";
import MyRouter from './router';
function App() {
  return (
    <div className="App">
      
      
        <RouterProvider router={MyRouter}>
        
        </RouterProvider>
      
    </div>
  );
}

export default App;
