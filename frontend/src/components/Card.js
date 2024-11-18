import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, summary, image, content, verseLink, examples }) => {
    const [isContentModalOpen, setContentModalOpen] = useState(false);
    const [isExamplesModalOpen, setExamplesModalOpen] = useState(false);
    const [isVerseModalOpen, setVerseModalOpen] = useState(false);

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            {/* Renderiza el summary como HTML */}
            <p dangerouslySetInnerHTML={{ __html: summary }} />

            <button className="button-primary" onClick={() => setContentModalOpen(true)}>
                Leer Contenido
            </button>

            <button className="button-secondary" onClick={() => setVerseModalOpen(true)}>
                Leer Versículo
            </button>

            <button className="button-tertiary" onClick={() => setExamplesModalOpen(true)}>
                Ver Ejemplos Prácticos
            </button>

            {/* Modal de contenido */}
            {isContentModalOpen && (
                <div className="modal" onClick={() => setContentModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setContentModalOpen(false)}>&times;</span>
                        <h2>{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            )}

            {/* Modal de versículo */}
            {isVerseModalOpen && (
                <div className="modal" onClick={() => setVerseModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setVerseModalOpen(false)}>&times;</span>
                        <h2>Versículo</h2>
                        <iframe
                            src={verseLink}
                            title="Versículo"
                            style={{ width: '100%', height: '80vh', border: 'none' }}
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Modal de ejemplos */}
            {isExamplesModalOpen && (
                <div className="modal" onClick={() => setExamplesModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setExamplesModalOpen(false)}>&times;</span>
                        <h2>Ejemplos Prácticos</h2>
                        <p dangerouslySetInnerHTML={{ __html: examples }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
