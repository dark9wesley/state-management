
import { connect } from "react-redux";

const computed = (values: any) => {
  let summary = 0;
  for(const key in values){
    if(values.hasOwnProperty(key)){
      summary += values[key];
    }
  }
  return summary;
}

const Summary: React.FC<any> = ({ summary }) => {

  return <div>{summary}</div>;
}

const mapState = (state: any) => ({
  summary: computed(state)
})
 
export default connect(mapState)(Summary);
