import React, {useState, useEffect} from "react";
import axios from "axios";
import Body from "./Body";
import Header from "./Header";
import {filter, paginate} from"./utils"

const Component = () => {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [recordLimit, setRecordLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState([]);
  const [c, setC] = useState([]);
  
  const fetchRecords = React.useCallback(async () => {
    setLoading(true);
    const {data} = await axios("https://api.enye.tech/v1/challenge/records");
    setRecords(data.records.profiles);
    setLoading(false);
  }, []);
  
  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);
  
  const startIndex = page * recordLimit;
  const endIndex = startIndex - recordLimit;
  let currentRecord;
  
  current.length > 1 ? (
    currentRecord = current.slice(endIndex, startIndex)
  ) : currentRecord = records.slice(endIndex, startIndex);
     
  
  //setCurrentRecord(current);
  
  // Get all paginated number
  let arrs = [];
  let size;
  if(current.length > 1) {
    c.length > 1 ? size = Math.ceil(c.length/recordLimit) : size = Math.ceil(current.length/recordLimit);
    //let arrs = [];
    for(let i = 1; i<=size; i++) {
      arrs.push(i);
    };
  } else {
    c.length > 1 ? size = Math.ceil(c.length/recordLimit) : size = Math.ceil(records.length/recordLimit);
    //let arrs = [];
    for(let i = 1; i<=size; i++) {
      arrs.push(i);
    };
  }
  
  //  change current page
  const paginate = (i) => setPage(i);
  
  const handleOnFilter = (e, obj) => {
    e.preventDefault();
    //setInput(obj);
    //console.log("records", records);
    //console.log("obj", obj);
    const f = filter(records, obj);
    //console.log("f", f);
    setCurrent(f);
  };
  
  const search = (e, text) => {
    e.preventDefault();
    let c = [];
    if(current.length > 1) {
      current.map(el => {
        if(el.FirstName.toLowerCase().includes(text.toLowerCase())) {
          c.push(el);
        }
      });
      setC(c);
      console.log(c);
    } else {
      records.map(el => {
        if(el.FirstName.toLowerCase().includes(text.toLowerCase())) {
          c.push(el);
        }
      });
      setC(c);
      console.log(c);
      //console.log(currentRecord);
    }
  };
  
  c.length > 1 ? currentRecord = c : currentRecord = currentRecord;
    
  return (
    <div>
      <Header filter={handleOnFilter} search={search} />
      <Body records={currentRecord} loading={loading} paginate={paginate} number={arrs} />
    </div>
  );
};

export default Component;