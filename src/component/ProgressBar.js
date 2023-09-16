import "./ProgressBar.css";
export const ProgressBar = (props) => {
  const { completed } = props;
  console.log(completed);
  const inlinecss = {
    width: `${completed}%`
  }
  return (
    <div className="containerStyle">
      <div className="filterStyle" style={inlinecss}>
        <span className="labelStyle">{`${completed}%`}</span>
      </div>
    </div>
  );
};
