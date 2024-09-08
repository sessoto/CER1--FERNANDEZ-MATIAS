// con esta funcion cambio las subcategorias segun lo que seleccionen

document.getElementById("tipoResiduo").addEventListener("change", function(){
  
    // creacion de las constantes
  
    const subcategoria=document.getElementById("subcategoriaResiduo");
    const tipoResiduo=this.value;
    let opciones = "";

    //opciones para cada tipo

    if(tipoResiduo === "plastico"){
        
        opciones = `
        
                    <option value="botellasPlastico"> Botellas </option>
                    <option value="envases"> Envases </option>
                    <option value="bolsas"> Bolsas </option>

        `;
            
    }
    if(tipoResiduo === "papel"){

        opciones = `
        
                    <option value="periodicos"> Periódicos </option>
                    <option value="carton"> Cartón </option>
                    <option value="papelOficina"> Papel de oficina </option>

        `;


    }
    if(tipoResiduo === "vidrio"){

        opciones = `
        
                    <option value="botellasVidrio"> Botellas </option>
                    <option value="frascos"> Frascos </option>
                    <option value="cristaleria"> Cristalería </option>

        `;


    }
    if(tipoResiduo === "metales"){

        opciones = `
        
                    <option value="latas"> Latas </option>
                    <option value="cables"> Cables </option>
                    <option value="electrodomesticos"> Electrodomésticos pequeños </option>

        `;


    }
    if(tipoResiduo === "electronicos"){

        opciones = `
        
                    <option value="moviles"> Teléfonos móviles </option>
                    <option value="baterias"> Baterías </option>
                    <option value="componentes"> Componentes de computadoras </option>

        `;


    }

    // las opciones de menu se actualizan con el siguiente innerHTML
    subcategoria.innerHTML = opciones;

});