import React from 'react';
import PropTypes from 'prop-types';

export interface CardProps {
    title: string;
    description: string;
    onCapture: () => void;
    btnColor?: 'red' | 'green' | 'gold';  // Definimos la propiedad btnColor
}

export const Card: React.FC<CardProps> = ({ title, description, onCapture, btnColor = 'blue' }) => {
    // Definimos el color del botón basado en la propiedad btnColor
    const buttonStyles = {
        ...styles.button,
        backgroundColor: getButtonColor(btnColor),  // Cambiar el color del fondo según la propiedad
    };

    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button style={buttonStyles} onClick={onCapture}>
                Capturar
            </button>
        </div>
    );
};

// Función para mapear el color del botón basado en la propiedad btnColor
const getButtonColor = (color: 'red' | 'green' | 'gold') => {
    switch (color) {
        case 'red':
            return '#FF0000';
        case 'green':
            return '#28a745';
        case 'gold':
            return '#FFD700';
        default:
            return '#007BFF';  // Color por defecto (azul)
    }
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        textAlign: 'center' as const,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    button: {
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 16px',
        cursor: 'pointer',
    },
};

// Agregar PropTypes para validación de la propiedad btnColor
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCapture: PropTypes.func.isRequired,
    btnColor: PropTypes.oneOf(['red', 'green', 'gold']),  // Validación de btnColor
};
