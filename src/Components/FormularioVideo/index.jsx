import React, { useState, useEffect} from 'react';
import { Button,TextField, Typography, MenuItem } from '@mui/material/';
import { Botones, Div } from '../../UI';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAPI } from '../../Context/api';


function Formulario (){

    const [titulo, setTitulo] = useState("");
    const [link, setLink] = useState("");
    const [imagen, setImagen] = useState("");
    //Este es mi listaOpciones
    const [categoria, setCategoria] = useState("");

    const [descripcion, setDescripcion]= useState("");
    const [codigo, setCodigo] = useState("");
    const [codigoValido, setCodigoValido] = useState(false);
    
    const {registrarVideo, categorias} = useAPI();

    const [agregado, setAgregado] = useState(false);

    useEffect(() => {
        if (agregado) {
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Nuevo video agregado con exito',
            showConfirmButton: false,
            timer: 1800
          })

    
        /*  setTimeout(function(){
            window.location.href = "/Add-video";
          }, 1000); */
          
        }
      }, [agregado]);


    function limpiarInputs() {
        setTitulo("");
        setLink("");
        setImagen("");
        setCategoria("");
        setDescripcion("");
        setCodigo("");
    }

    function validarCodigo(value) {
        if (value === "010203") {
          setCodigoValido(true);
        } else {
          setCodigoValido(false);
        }
      }


return (<section>
    <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,link,imagen,categoria,descripcion,codigo
        }
        registrarVideo(datosAEnviar);
        setAgregado(true);
      }}>
    <Typography variant="h3" align="center">Nuevo video</Typography>
        <TextField
        name="titulo" 
        id="title" 
        label="Titulo" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) =>
            setTitulo(e.target.value)} 
        value={titulo.value}
        required
        error={titulo.valid === false}
        helperText={titulo.valid === false && "Titulo no puede estar vacio y debe contener almenos 5 caracteres"} 
        />
        <TextField
        name="link"
        type='url' 
        id="linkVideo" 
        label="Link del video" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) => 
            setLink(e.target.value)} 
        value={link}
        required
        />
        <TextField 
        name="imagen"
        type='url'
        id="linkImg" 
        label="Link de la imagen" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) => 
            setImagen(e.target.value)} 
        value={imagen}
        required
        />
        <div>
            <TextField 
            name='categoria'
            id="category" 
            label="Elija una categoría" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            select 
            onChange={(e) => 
                setCategoria(e.target.value)} 
            value={categoria} 
            required
            >
                {categorias.map((option) => (
                <MenuItem  key={option.id} value={option.titulo}>
                {option.titulo}
                </MenuItem>
                ))} 
            </TextField>
        </div>
        <TextField 
        name='descripción'
        id="description" 
        label="Descripción" 
        variant="outlined" 
        fullWidth margin="normal"  
        multiline rows={2}
        onChange={(e) => 
            setDescripcion(e.target.value)} 
        value={descripcion}
        />
        <TextField 
        name="codigo"
        id="codeSecurity" 
        label="Ingresa el código de seguridad para poder guardar el video" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) =>{ 
            setCodigo(e.target.value);
            validarCodigo(e.target.value);}} 
        value={codigo}
        required 
        />
        <Botones>
            <Div>
                <Button variant="contained" type="submit" disabled={!codigoValido}>Guardar</Button>
                <Button variant="contained" color="inherit" onClick={limpiarInputs}>Limpiar</Button>
            </Div>
            <Link to="/Categorias">
                <Button variant="contained" >Nueva categoría</Button>
            </Link>
        </Botones>       
</form>
</section>
        )
};

export default Formulario;