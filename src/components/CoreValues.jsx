import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 330px;
  background-color: #e6eaf9;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content in the card */
  gap: 16px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 195px; /* Set a fixed width for the circular image */
  height: 200px; /* Set a fixed height (same as width) */
  object-fit: cover; /* Ensure the image is cropped correctly */
  border-radius: 50%; /* Makes the image circular */
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: auto;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #012dc1;
  text-align: center;
  line-height: 1.4;
`;

const CoreValuesCard = ({ value, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, value: value })}>
      <Image src={value.image} alt={value.title} />
      <Details>
        <Title>{value.title}</Title>
      </Details>
    </Card>
  );
};

export default CoreValuesCard;
