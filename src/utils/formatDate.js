export function getYear(date) {
  if (!date) {
    return null;
  }
  const dateRelease = new Date(date);
  return ` (${dateRelease.getFullYear()})`;
}
