const RenderRange = ({spellRange}: any) => {


  // "range": {
  //   "type": "point",
  //   "distance": {
  //     "type": "feet",
  //     "amount": 60
  //   }
  // },

  return ( 
    <div>
    {spellRange.distance && spellRange.distance.amount && spellRange.distance.type ? (
      <p>Distance: {spellRange.distance.amount} {spellRange.distance.type}, {spellRange.type}</p>
    ) : (
      <p>Distance: Not specified</p>
    )}
    </div>
   );
}
 
export default RenderRange;