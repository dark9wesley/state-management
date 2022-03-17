interface SummaryProps {
  summary: number
}
 
const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return <div>{summary}</div>;
}
 
export default Summary;
