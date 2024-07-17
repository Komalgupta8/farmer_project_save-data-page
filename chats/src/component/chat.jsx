import React, { useState } from 'react';
import ChatDisplay from './chatDisplay';
import Button from './button';
import { generatePDF } from './generatePDF';
import './chat.css';

export default function Chats() {
    const [modelRes, setModelRes] = useState({});

    let modelData; // Data that you have to download and display save it in modelData variable;

    function saveData() {
        setModelRes(modelData);
        generatePDF(modelRes);
    }

    function improveData() {
        // code to redirect to generate data page
    }

    return (
        <div className="container">
            <div className="chat-display-container">
                <ChatDisplay modelData={modelData}/>
            </div>
            <div className="button-container">
                <Button onClick={saveData} text={"Save Data"} className="button" />
                <Button onClick={improveData} text={"Improve Data"} className="button" />
            </div>
        </div>
    );
}
