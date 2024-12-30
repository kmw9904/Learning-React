import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props => {
    console.log(props); // dark
    return (
      props.$dark &&
      `
      background-color: black;
      color: white;
      border: none;
    `
    );
  }}
`;

function Card() {
  return (
    <CardContainer $dark>
      <div>
        <h2>Styled Component</h2>
        <p>이것은 styled-components로 만든 카드 입니다.</p>
      </div>
    </CardContainer>
  );
}

export default Card;
