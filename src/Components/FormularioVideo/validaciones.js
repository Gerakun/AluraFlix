export const validarTitulo = (titulo) => {
  const length = titulo.length
  return (length >= 5) ? true : false

};

export const validarLink = (link) => {
  const length = link.length;
  if( length >= 10 && length < 50){
      return true
  }else{
      return false
  }
}

export const validarCodigo = (codigo) => {
  const length = codigo.length;
  if( length >= 6 && codigo.includes("010203") ){
      return true
  }else{
      return false
  }
}

export const validarDescripcion = (descripcion) => {
  const length = descripcion.length;
  if( length >= 5 && length < 50){
      return true
  }else{
      return false
  }
}