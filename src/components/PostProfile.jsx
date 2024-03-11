import './PostProfile.css'
import UserDisplay from './UserDisplay'

function PostProfile({publications}) {

    
    

 return (
    <div className='PostProfile'>
        {
            publications.length >= 0  // Verifica si publications tiene al menos un elemento
                ? (() => {  // Inicia una función anónima autoinvocada
                    while (publications.length % 3 !== 0) {  // Ejecuta un bucle while hasta que la longitud de publications sea un múltiplo de 3
                        publications.push({"picture": ''});  // Agrega un nuevo elemento a publications con la propiedad "picture" vacía
                    }
                
                    const rows = [];  // Inicializa un array para almacenar las filas
                    for (let i = 0; i < publications.length; i += 3) {  // Itera sobre publications en incrementos de 3
                        rows.push(  // Agrega una nueva fila al array rows
                        //Crea un div con la clase 'PostProfile__row' y una clave única
                            <div className='PostProfile__row' key={i}>  
                                {publications.slice(i, i + 3).map((publication, index) => (  // Mapea los elementos de publications en la fila actual
                                    <UserDisplay key={index} url={publication.picture} />  // Renderiza un componente UserDisplay para cada elemento de la fila
                                ))}
                            </div>
                        );
                    }
                
                    return rows;  // Devuelve el array de filas
                })()  // Cierra la función anónima autoinvocada
                : ''  // Si publications no tiene elementos, devuelve una cadena vacía
        }
    </div>
)

    
}

export default PostProfile