import { createMuiTheme,  MenuItem, TextField, ThemeProvider } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui';
import React from 'react';
import './Header.css';
import categories from '../../data/category';
import { debounce } from 'lodash';

const Header = ({ 
    setCategory, 
    category, 
    word, 
    setWord, 
    setMeanings,
    LightMode, 
   }) => {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: LightMode? "#000": "#fff",
            },
            type: LightMode? "light": "dark",
        },
    });


    // const handleChange = (language) => {
    //     setCategory(language);
    //     setWord("");
    // }

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    };

    const handleText = debounce((text) => {
        setWord(text);
    }, 500);

    return (
        <div className="header">
            <span className="title">{word ? word : "Stalk-Word"}</span>
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className="search" 
            label="Search a Word" 
                // value={word}
                onChange={(e) => handleText(e.target.value)}
            />
            <TextField 
            select
            className="select"
            label="Language"
            value={category}
            // onChange={(e)=>handleChange(e.target.value)}
            onChange={(e)=>handleChange(e)}
            >
            {
                categories.map((option) => (
                    <MenuItem 
                    key={option.label} 
                    value={option.label}
                    >
                    {option.value}
                    </MenuItem>
                ))
            }
                
            </TextField>
            </ThemeProvider>
                
            </div>
        </div>

    );
};

export default Header;