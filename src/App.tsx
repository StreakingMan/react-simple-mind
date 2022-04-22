import React from 'react';
import SimpleMind from '../components';
import { testData } from './test-data';

function App() {
    return (
        <div>
            <SimpleMind data={testData} />
        </div>
    );
}

export default App;
