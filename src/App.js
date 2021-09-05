import React, { useState } from 'react';
// import './App.css';
import moment from "moment";
import 'antd/dist/antd.css';
import MomentCalendar from './momentJS/MomentCalendar';

function App() {
    const [value, setValue] = useState(moment());
    return (
        <div className="App">
            <div className="App-header">
                <MomentCalendar value={value} onChange={setValue} />
            </div>
        </div>
    );
}

export default App;
