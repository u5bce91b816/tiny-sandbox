// scratch

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

const uniq = (xs) => [...new Set(xs)];

console.log(uniq(["a", "a", "b"]));
