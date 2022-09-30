//Container bootstrap
import {Container} from 'react-bootstrap';
//provider permite a los componentes hijos acceder al state
import { CategoriaProvider } from './context/CategoriaProvider';
import { BebidasProvider } from './context/BebidasProvider';


import Formulario from "./components/formulario";
import { ListadoBebidas } from "./components/ListadoBebidas";

function App() {
    return (
      <CategoriaProvider>
        <BebidasProvider>
        <header className='py-5'>
          <h1 className='text-uppercase'>Receta y buscador bebida</h1>
        
        </header>

        <Container className='mt-4'>
          <Formulario/>
          <ListadoBebidas/>
        </Container>
        </BebidasProvider>
      </CategoriaProvider>
    );
}

export default App
