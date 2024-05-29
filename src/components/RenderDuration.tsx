const RenderDuration = ({ spellDuration }: any) => {
  const durationDur = spellDuration[0]?.duration;
  const ends = spellDuration[0]?.ends;

  const renderStuff = () => {
    if (spellDuration.length > 1) {
      return (
        <>
          <div>Casting Speed: {spellDuration[0].type}</div>
          <div>
            Duration: {spellDuration[1].duration.amount}{" "}
            {spellDuration[1].duration.type}
          </div>
        </>
      );
    } else if (durationDur === undefined) {
      return <div>Duration: {spellDuration[0].type}</div>;
    } else {
      let concentration = spellDuration[0]?.concentration;

      if (concentration === undefined) {
        return (
          <>
            <div>
              Duration: {spellDuration[0].duration.amount}{" "}
              {spellDuration[0].duration.type}
            </div>
          </>
        );
      } else {
        return (
          <>
            <div>
              Duration: {spellDuration[0].duration.amount}{" "}
              {spellDuration[0].duration.type},{" "}
              {spellDuration[0].concentration ? "Concentration" : ""}
            </div>
          </>
        );
      }
    }
  };
  return (
    <>
      {renderStuff()}
      {ends !== undefined ? `Ends on: ${spellDuration[0].ends}` : ""}
    </>
  );
};

export default RenderDuration;
