import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {covidDetails, loadCovidDetails, affectedState} from './features/covidSlice';
import axios from 'axios';
import Covid from './components/Covid';


function App() {
  const dispatch = useDispatch(); 
  const covidStats = useSelector(covidDetails);   
  const fetchData = async () => {
        const result = await axios.get('https://covidnigeria.herokuapp.com/api')
        .catch((error) => {
            console.log(`we encountered the following ${error}`)
        })
        dispatch(loadCovidDetails(result.data.data))
        const {states} = result.data.data;
        dispatch(affectedState(states))
        return result.data
    };

  useEffect(() => {
        fetchData();
    }, [])



    const {death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested} = covidStats
  return (
    <div className='App'>

      <div className='app'>
        <div>
          <h1>NIGERIA'S Covid 19 Report</h1>
        </div>

        <div >
          <h3>Total recorded deaths: {death} persons</h3>
          <h3> Total discharged: {discharged} persons</h3>
          <h3> Total Active Cases: {totalActiveCases} persons</h3>
          <h3> Total Confirmed Cases: {totalConfirmedCases} persons</h3>
          <h3> Total Samples Collected: {totalSamplesTested} persons</h3>
        </div>

      </div>
      <div className='ui grid container'>
        <Covid></Covid>
      </div>
    </div>
  );
}

export default App;
