import React from 'react';

const styles = {
    boxShadow:'inset 0px 1px 0px 0px #ffffff',
	background:'linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%)',
	backgroundColor:'#ededed',
	borderRadius:'6px',
	border:'1px solid #dcdcdc',
	display:'inline-block',
	cursor:'pointer',
	color:'#2a9d8f',
	fontFamily:'Arial',
	fontSize:'15px',
	fontWeight:'bold',
	padding:'6px 24px',
	textDecoration:'none',
	textShadow:'0px 1px 0px #ffffff',
};

export default function Button( {label, generate} ) {
    return(
        <button
            style={styles}
            onClick={generate}>
            {label}
        </button>
    );
};