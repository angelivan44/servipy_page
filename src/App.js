import { useEffect } from 'react';
import Main from './pages/Main';
function App() {
  useEffect(() => {
        document.title = 'Servipy'
    }, []);
  return (
    <>
    <Main></Main>
    </>
    
  );
}

export default App;
