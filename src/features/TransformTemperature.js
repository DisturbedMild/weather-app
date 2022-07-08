function transformKelvinsToCelsium(val) {
  const celsium = val - 273.15;
  return celsium.toFixed(1);
}

export default transformKelvinsToCelsium;
