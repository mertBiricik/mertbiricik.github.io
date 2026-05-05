// Build-time computed globals.

module.exports = {
  buildYear: new Date().getFullYear(),
  buildDate: new Date().toISOString()
};
