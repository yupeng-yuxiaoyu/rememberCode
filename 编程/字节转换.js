function prettyBytes(bytes, base = 1000, maximumFractionDigits = 2) {
  let index = 0;
  const arr = ['B', 'KB', 'MB', 'GB', 'TB'];
  while(bytes > base && index < 5) {
    index++;
    bytes = (bytes / base).toFixed(maximumFractionDigits);
  }
  return bytes + ' ' +arr[index];
}

console.log(prettyBytes(133700000)); //'1.34 KB' B KB MG GB TB