import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from './Button';

const styles = {
    margin: 5,
    maxWidth: '590px',
    backgroundColor: '#edf2f4',
    paddingTop: '20px',
    paddingBottom: '20px',
    paragraph: {
        margin: 0,
        padding: '15px',
        fontFamily: 'Arial',
        fontSize: '15px',
        color: '#e76f51',
    },
};

export default function UuidGen() {
    const [uuidkey, setUuidkey] = useState('Kliknij przycisk, aby wygenerować kod UUIDv4');

    const generateUUID = () => {
        // alert(uuidv4());
        setUuidkey(uuidv4());
    };
    return(
        <div style={styles}>
            <Button
                label="Generate UUID code"
                generate={generateUUID} />
            <p style={styles.paragraph}>{uuidkey}</p>
        </div>
    );
};