import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
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
  margin: 20px;
  & input {
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
  &input {
    width: unset;
    margin: 0 10px;
  }
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  border-radius: 4px;
  padding: 15px 20px;
  width: 135px;
  font-size: 14px;
  & span{
    font-weight: bold;
    font-size: 20px;
    color: ${(props => props.isIncome?'green':'red')};
  }
`;

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [des, setDes] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTransaction = () => {
    props.addTransaction({ amount: Number(amount), des, type, id: Date.now() });
    props.toogleAddtxn();
  };

  return (
    <AddTransactionContainer>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="description"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toogleAddtxn] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: Rs.{props.income - props.expense}
        <AddTransaction onClick={() => toogleAddtxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          toogleAddtxn={toogleAddtxn}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>Rs.{props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>Rs.{props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
