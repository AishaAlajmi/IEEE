import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 330px;
    background-color: #E6EAF9;
    cursor: pointer;
    border-radius: 16px; /* Slightly rounded corners for a modern look */
    overflow: hidden;
    padding: 20px; /* Adjusted padding for better spacing */
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover; /* Ensures the image maintains proportions */
    border-radius: 12px; /* Matches the card's rounded corners */
    background-color: #E6EAF9;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: auto; /* Pushes the title to the bottom of the card */
`;

const Title = styled.div`
    font-size: 22px; /* Slightly increased font size for clarity */
    font-weight: 600;
    color: #012DC1;
    text-align: center;
    line-height: 1.4; /* Better spacing between lines if the title wraps */
`;

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} alt={project.title} />
            <Details>
                <Title>{project.title}</Title>
            </Details>
        </Card>
    );
};

export default ProjectCards;
