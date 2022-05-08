import { useEffect, useState, useRef } from "react";
import  { API_GET_DATA } from '../../global/constants'
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setlist) {
  const res = await fetch(API_GET_DATA)
  console.log(res);
  const {data} = await res.json()
  setlist(data)
  // console.log(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify({data})
  })
}


const Home = () => {
  const [list, setlist] = useState([]);
  const submittingStatus = useRef(false)

  useEffect(() => {
    if(!submittingStatus) return
    fetchSetData(list).then(data=>submittingStatus.current = false)
  },[list])
  
  useEffect(() => {
    // console.log('EffectStart==>',list);
    // return () => {
    // console.log('EffectEnd==>',list);
    // }
    // get data from back end
    fetchData(setlist)
  }, []);

  return (
    <div className="app">
      <Edit add={setlist} submittingStatus={submittingStatus} />
      <List listData={list} deleteData={setlist} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;
