module.exports = function debugMes(mes, debugMode = false) {
  if (debugMode) {
    console.log(mes);
  }
}