import { useState } from 'react';
import { useEffect } from 'react';
import Publication from './Publication';

function Feed() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(0);
    const [addedPhotoIds, setAddedPhotoIds] = useState(new Set());

    const elementos = [
        { user: 'Usuario 1', photoId: 1 },
        { user: 'Usuario 2', photoId: 2 },
        { user: 'Usuario 3', photoId: 3 },
        { user: 'Usuario 4', photoId: 4 },
        { user: 'Usuario 5', photoId: 5 },
        { user: 'Usuario 6', photoId: 6 },
        { user: 'Usuario 7', photoId: 7 },
        { user: 'Usuario 8', photoId: 8 },
        { user: 'Usuario 9', photoId: 9 },
        { user: 'Usuario 10', photoId: 10 },
        { user: 'Usuario 10', photoId: 11 },
        { user: 'Usuario 12', photoId: 12 },
        { user: 'Usuario 13', photoId: 13 },
        { user: 'Usuario 14', photoId: 14 },
        { user: 'Usuario 15', photoId: 15 },
    ];

    const cargarDatos = () => {
        const newIndex = index + 1;
        if (newIndex < elementos.length) {
            const newItem = elementos[newIndex];
            // Verificar si el photoId ya ha sido agregado
            if (!addedPhotoIds.has(newItem.photoId)) {
                setItems(prevItems => [...prevItems, newItem]);
                setIndex(newIndex);
                setAddedPhotoIds(prevAddedPhotoIds => new Set([...prevAddedPhotoIds, newItem.photoId]));
            }
        }
    };
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        // Cargar datos iniciales
        cargarDatos();
        // Agregar event listener para el scroll
        window.addEventListener('scroll', handleScroll);
        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        if (page > 1) {
            cargarDatos();
        }
    }, [page]);

return (
    <div className='Feed'>
        {items.map((index) => (
        <Publication key={index}/>
    ))}
    </div>
    )
}

export default Feed