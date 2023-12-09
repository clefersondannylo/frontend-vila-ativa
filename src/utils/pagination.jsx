export function pagination(value, setSkip, setPage) {
  const limit = value * 20 - 20;
  setSkip(limit);
  setPage(value);
}
