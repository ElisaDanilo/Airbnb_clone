import React from 'react'
import './css/Search.css'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {useNavigate} from "react-router-dom"
import { useState} from 'react';

//import Button from "@material-ui/core";
import PeopleIcon from '@mui/icons-material/People';
import { Button} from '@material-ui/core';

// Date picker component
function Search() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState (new Date());
    const [showMenu, setShowMenu] = useState(false)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

function handSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div onMouseLeave={()=> setShowMenu(!showMenu)} className='search'>
    <DateRangePicker ranges={[selectionRange]} onChange={handSelect} />
   <h2>Number of guests <PeopleIcon /> </h2>
   <input min={0} defaultValue={2} type="number"/>
    <Button onClick={()=>navigate("/list")}> Search </Button>
    </div>
  )
}

export default Search