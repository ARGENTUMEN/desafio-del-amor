import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

const CardPage = () => {
    const { day } = useParams(); // Obtiene el parámetro dinámico de la URL
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Llama a la API para obtener los datos del día
        fetch(`http://localhost:5001/api/cards/${day}`)
            .then((res) => res.json())
            .then((data) => {
                setCard(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al obtener la tarjeta:', err);
                setLoading(false);
            });
    }, [day]);

    if (loading) return <p>Cargando...</p>;
    if (!card) return <p>No se encontró información para el día {day}</p>;

    return (
        <Card
            title={card.title}
            summary={card.summary}
            image={card.image}
            content={card.content}
            verseLink={card.verseLink}
            examples={card.examples}
        />
    );
};

export default CardPage;
