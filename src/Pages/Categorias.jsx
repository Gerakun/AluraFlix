import NuevaCategoria from "../Components/NewCategory";
import { SectionStyled } from "../UI/variables";
import Container from '@mui/material/Container';
import { useAPI } from "../Context/api";


const Categoria = () =>{

    const {crearCategoria} = useAPI();

    return (
        <Container component="section" maxWidth="md">
            <SectionStyled>
                <NuevaCategoria crearCategoria={crearCategoria} />
            </SectionStyled>
        </Container>   
    );
};

export default Categoria;