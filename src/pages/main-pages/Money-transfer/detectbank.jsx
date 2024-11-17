import  { useState } from 'react';
import {banks}  from './banks.js';
import { Input } from 'antd'
import "./main.css"

const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
const arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

const replaceDigitNumbers = (value) => {
    if (typeof value === 'string') {
        for (let i = 0; i < 10; i++) {
            value = value.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return value;
};

const formatCardNumber = (value) => {
    value = value.replace(/\D/g, '').slice(0, 16);  
    return value.match(/.{1,4}/g)?.join('-') || value;
};


const detectBank = (cardNumber) => {
    const cardPrefix = parseInt(cardNumber.slice(0, 6), 10);
    return banks.find(bank => bank.card_no === cardPrefix);
};

const CardInput = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [bank, setBank] = useState(null);

    const handleInputChange = (event) => {
        let value = replaceDigitNumbers(event.target.value); 
        value = formatCardNumber(value); 
        setCardNumber(value); 

        if (value.replace(/-/g, '').length >= 6) { 
            const detectedBank = detectBank(value.replace(/-/g, ''));
            setBank(detectedBank || null); 
        } else {
            setBank(null);
        }
    };

    return (
        <div className="card-input-component">
            <Input 
                style={{padding:10 , textAlign:"center"}}
                id="card-input"
                type="text"
                value={cardNumber}
                onChange={handleInputChange}
                maxLength="19"
                placeholder="0000-0000-0000-0000"
            />
    
            {bank && (
                <div className="bank-info">
                    <img src={bank.bank_logo} alt={bank.bank_name} className="bank-logo" />
                    <span className="bank-name">{bank.bank_title}</span>
                </div>
            )}
            {!bank && cardNumber.replace(/-/g, '').length >= 6 && (
                <div className="bank-info">
                    <span className="bank-name"> </span>
                </div>
            )}
        </div>
    );
};

export default CardInput;
