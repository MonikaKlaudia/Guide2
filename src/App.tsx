// src/App.tsx
import React from 'react';
import Button from './components/Button';
import './App.css'; 

const App: React.FC = () => {
    const handleClick = () => {
        
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Props</h1>
            <Button
                label="Click Me!"
                onClick={handleClick}
                backgroundColor="green"
                color="white"
                size="large"
            />
            <Button
                label="Disabled"
                onClick={handleClick}
                disabled={true}
                size="medium"
                style={{ marginTop: '10px' }}
            />
            <Button
                label="Small Button"
                onClick={handleClick}
                size="small"
                backgroundColor="purple"
                style={{ marginTop: '10px' }}
            />
        </div>
    );
};

export default App;
