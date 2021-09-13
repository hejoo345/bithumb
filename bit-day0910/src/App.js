import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    if(document.getElementById('kim')){
      const sc = document.createElement('script');
      sc.src = "https://use.fontawesome.com/releases/v5.2.0/js/all.js";
      document.body.appendChild(sc);
    }
  }, [])
  const cc = {
    marginLeft : '120px',
    fontSize: '24pt',
  }
  const dd = {
    fontSize: '24pt',
  }
  return (
    <div style={cc} id='kim'>
         <h2>javascript cdn(contents delivery network)</h2>
         <span><i class="fas fa-tree"></i></span>   
        <span><i class="fas fa-tree"></i></span>  
        <span><i class="fas fa-tree"></i></span>  
          
        <div style={dd}>
          <i class="fas fa-poo"></i>
          <i class="fas fa-poo"></i>
          <i class="fas fa-poo"></i>
          <i class="fas fa-poo"></i>
          <i class="fas fa-poo"></i>
            <i class="fas fa-poo fa-5x fa-spin"></i>
            <i class="fas fa-poo fa-5x fa-rotate-90"></i>
        </div>
        <button></button>
    </div>
  );
}

export default App;
