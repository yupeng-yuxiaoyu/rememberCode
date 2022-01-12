function fn(n) {
  if (n == 1 | n == 2) return 1;
  return fn(n - 1) + fn(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fn(i));  
}