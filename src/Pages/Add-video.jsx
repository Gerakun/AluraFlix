import { FormStyled } from "../UI/variables";
import Formulario from "../Components/FormularioVideo";
import Container from '@mui/material/Container';
import { useAPI } from "../Context/api";


const AddVideo = () => {
  
    const {categorias, /*registrarVideo*/} = useAPI();

    return (        
    <Container component="section" maxWidth="sm">
        <FormStyled>
            <Formulario categorias={categorias} /*registrarVideo={registrarVideo}*/ />
        </FormStyled>
    </Container>
        
    );
};

export default AddVideo;