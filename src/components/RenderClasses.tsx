const RenderClasses = ({ availableTo }: any) => {
  const extractClasses = (availableClasses: any) => {
    const classes = [];
    // Iterate over each source book (e.g., PHB, TCE)
    for (const source in availableClasses) {
      const classList = availableClasses[source];
      // Collect all class names that are set to true
      for (const className in classList) {
        if (classList[className] === true) {
          classes.push(className);
        }
      }
    }
    return classes;
  };

  return (
    <div>
      {/* Loop through each item in availableTo */}
      {availableTo.map((item: any, index: any) => {
        if (item.class) {
          const classes = extractClasses(item.class);
          return (
            <div key={index}>
              {/* Render each class */}
              {classes.map((className, classIndex) => (
                <div key={classIndex} className="text-sm">
                  {className}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default RenderClasses;