import { useState, useEffect } from 'react';
import SummaryStore from '../store/summaryStore';
 
const Summary: React.FC = () => {
  const [summary, setSummary] = useState(SummaryStore.getSummary());

  const eventListener = () => setSummary(SummaryStore.getSummary());

  useEffect(() => {
    SummaryStore.addChangeListener(eventListener);

    return () => {
      SummaryStore.removeChangeListener(eventListener);
    }
  }, [])

  return <div>{summary}</div>;
}
 
export default Summary;
