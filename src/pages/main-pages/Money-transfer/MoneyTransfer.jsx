import MoneyTransferForm from "./MoneyTransferForm";
import TransactionResult from "../../../components/transaction-result/TransactionResult.jsx";
import { useState } from "react";

export default function MoneyTransfer() {
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <>
      {showResult ? (
        <TransactionResult isSuccess={isSuccess} />
      ) : (
        <>
          <h1 className="card-title">انتقال وجه</h1>
          <MoneyTransferForm
            setShowResult={setShowResult}
            setIsSuccess={setIsSuccess}
          />
        </>
      )}
    </>
  );
}
