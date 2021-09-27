import React from 'react';
import {useSelector} from 'react-redux';
import {stateStatistics} from './../features/covidSlice'


const Covid = () => {
    const stateStats = useSelector(stateStatistics)

    const stateInfo =  stateStats.map((states) => {
    const {casesOnAdmission, confirmedCases, death, discharged, state, id} = states
        return (
            <div className="four wide column">
            <div className='ui cards'>
            <div className='card' key={id}>
            <div className='content'>
                <div className='header'>Name: {state} </div>
                <div className='description'>Cases On Admission:  {casesOnAdmission}</div>
                <div className='description'>Confirmed Cases: {confirmedCases}</div>
                <div className='meta'>Patients discharged: {discharged}</div>
                <div className='meta'>Recorded deaths: {death}</div>
            </div>
            </div>
            </div>
            </div>
            
        )
    })

    return (
        <>
            {stateInfo}
        </>
    )
}

export default Covid
