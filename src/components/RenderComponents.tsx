const RenderComponents = ({ spellComponents }: any) => {

  return (
    <>
      <div>
        Components: 
        {Object.entries(spellComponents).map(([key,value]) => (
          <span key={key}>{" "}{key.toUpperCase()}</span>
        ))}
      </div>
    </>
  );
};

export default RenderComponents;
