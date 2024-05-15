
interface AvailableToProps {
  availableTo: {
    [key: string]: string[];
  }
}


const RenderClasses: React.FC<AvailableToProps> =  ({ availableTo }) => {

  return (
    <div>
      {Object.entries(availableTo).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value.length > 0 ? value.join(', ') : 'All'}
        </div>
      ))}
    </div>
  );
};

export default RenderClasses;