const subLength = function(str, chr) {
  let y = str.split('').filter(x => x === chr);
  if (y.length !==2 ) return 0;
  const m = str.indexOf(chr);
  const n = str.lastIndexOf(chr);
  y = str.substr(m, n);
  return y.length;
}
