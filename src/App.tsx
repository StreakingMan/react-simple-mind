import React from 'react';
import SimpleMind from '../components';
import { testData } from './test-data';
import './App.css';

function App() {
    return (
        <div>
            <SimpleMind data={testData} gap={[64, 24]} />
            <SimpleMind
                className={'demo2'}
                elementClassName={'element'}
                data={{ ...testData, children: testData.children?.slice(0, 3) }}
            />
        </div>
    );
}

export default App;
