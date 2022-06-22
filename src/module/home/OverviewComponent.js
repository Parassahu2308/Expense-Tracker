import { useState } from "react";
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
const AddTransaction = styled.div`
  background: black;
  color: white;
  height: 20px;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 20px;
  & input{
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  &input{
    width: unset;
    margin: 0 10px
  }
`;

const AddTransactionView = (props) =>{
    return(
      <AddTransactionContainer>
          <input placeholder="Amount"/>
          <input placeholder="Description"/>
          <RadioBox>
              <input type="radio" id="expense" name="type" value="EXPENSE"/>
              <label htmlFor="expense" >Expense</label>
              <input type="radio" id="description" name="type" value="INCOME"/>
              <label htmlFor="income" >Income</label>
          </RadioBox>
          <AddTransaction>Add Transaction</AddTransaction>
      </AddTransactionContainer>
    );
};

const OverviewComponent = (props) =>{

    const [isAddTxnVisible, toogleAddtxn] = useState(false);

      return(
        <Container>
            <BalanceBox>
                Balance: Rs.10000
                <AddTransaction onClick={()=>toogleAddtxn(!isAddTxnVisible)}>
                  {isAddTxnVisible ? "Cancel" : "ADD"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView/>}
        </Container>
      );
};

export default OverviewComponent;