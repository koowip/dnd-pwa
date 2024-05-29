const RenderRange = ({ spellRange }: any) => {

  const distanceAmount = spellRange?.distance?.amount;
  const distanceType = spellRange?.distance?.type;

  const spellRangeWithAmount = (props) => {
    if (props.type === "point") {
      return (
        <span>
          {" "}
          point within {props.distance.amount} {props.distance.type}
        </span>
      );
    } else {
      return (
        <span>
          {" "}
          {props.type} of {props.distance.amount} {props.distance.type}{" "}
        </span>
      );
    }
  };

  const spellRangeWithoutAmount = (props) => {
    if(distanceType !== undefined){
      return <span> {props.distance.type}</span>;
    } else {
      return <span> {props.type}</span>
    }
  };

  return (
    <div>
      Range:
      <div className="inline">
        {distanceAmount !== undefined
          ? spellRangeWithAmount(spellRange)
          : spellRangeWithoutAmount(spellRange)}
      </div>
    </div>
  );
};

export default RenderRange;
