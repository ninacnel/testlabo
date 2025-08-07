const ChangeDollar = ({ dollar, onChangeDollar }) => {
  const handleDollarChange = (e) => {
    onChangeDollar(e.target.value);
  };

  return (
    <div>
      <label>Nueva cotizacion:  </label>
      <input
        type="number"
        value={dollar}
        onChange={handleDollarChange}
      />
    </div>
  );
};


export default ChangeDollar;