import React, { useState } from 'react';
import moment from "moment";
import MomentCalendar from '../momentJS/MomentCalendar';

function Main() {
    const [value, setValue] = useState(moment());
    return (
        <div>
            <MomentCalendar value={value} onChange={setValue} />
        </div>
    );
}

export default Main;
