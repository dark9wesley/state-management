
import { useEffect, useState, useContext } from "react";
import { MainContext } from "../store";

const computed = (values: any) => {
  let summary = 0;
  for(const key in values){
    if(values.hasOwnProperty(key)){
      summary += values[key];
    }
  }
  return summary;
}

const Summary: React.FC = () => {
  const store = useContext(MainContext)
  const [summary, setSummary] = useState(computed(store.getState()));

  const eventListener = () => {
    setSummary(computed(store.getState()))
  }

  useEffect(() => {
    const unSubscribe = store.subscribe(eventListener)
    return () => unSubscribe()
  }, [])

  return <div>{summary}</div>;
}
 
export default Summary;
