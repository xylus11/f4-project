import React, { useEffect, useRef, useState } from 'react'
import './PostalInfo.css'
import Card from './Card';

export default function PostalInfo() {
    const [Code, setCode] = useState();
    const [List, setList] = useState();
    const [Data, setData] = useState();
    const filterInput = useRef(null);
    useEffect(() => {
        let temp = JSON.parse(sessionStorage.getItem("Postal"));
        setCode(temp);
        setData(temp.info[0].PostOffice);
        setList(temp.info[0].PostOffice);
        console.log(JSON.parse(sessionStorage.getItem("Postal")));
    }, []);
    const FilterData = () => {
        console.log(filterInput.current.value);
        let keyword = filterInput.current.value.toUpperCase();
        let New_List = Data.filter((item) =>
            (item.Name.toUpperCase().includes(keyword) || item.BranchType.toUpperCase().includes(keyword) || item.DeliveryStatus.toUpperCase().includes(keyword) || item.District.toUpperCase().includes(keyword) || item.State.toUpperCase().includes(keyword))
        )
        console.log(New_List);
        setList(New_List);
    }
    return (Code &&
        <div id='container'>
            <div id='code-info'>
                <p>Pincode : {Code.code}</p>
                <p>Message : {Code.info[0].Message}</p>
            </div>
            <div>
                <input ref={filterInput} placeholder='Filter' type='text' id='search-bar' onChange={FilterData} />
            </div>
            <div id='result'>
                {List.length>0
                    ?
                    List.map((item) =>
                        <Card name={item.Name} branch={item.BranchType} delivery={item.DeliveryStatus} district={item.District} state={item.State} />
                    )
                    :
                    <div>
                        <p className='not-found'>Couldn’t find the postal data you’re looking for</p>
                    </div>
                }
            </div>
        </div>
    )
}
