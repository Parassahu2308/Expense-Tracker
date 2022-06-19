import styled from  "styled-components";

const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px ;
  font-family: Montserrat;
  font-weight: bold;
`;
const BalanceBox = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: x-small;
`;

const OverviewComponent = (props) =>{
      return(
        <Container>
            <BalanceBox>
                Balance: Rs.10000
                <AddTransaction>ADD</AddTransaction>
            </BalanceBox>
        </Container>
      );
};

export default OverviewComponent;