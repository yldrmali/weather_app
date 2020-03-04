const passCity = () => {
  const cityVal = document.querySelector('input#searchTextField');
  let value = cityVal.value.trim();
  const comma = value.indexOf(',');
  if (!(comma === -1)) {
    return value.slice(0, comma);
  }
  return value;
};

export default passCity;
