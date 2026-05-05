// Build-time computed globals.

const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));

module.exports = {
  buildYear: now.getFullYear(),
  buildDate: now.toISOString(),
  // "Volume / Number" masthead flair: vol = year, no. = day of year (zero-padded)
  buildVersion: String(dayOfYear).padStart(3, '0')
};
