var range = function(start, end) {
var rangeArray = [];
  for (var numRange = start; numRange <= end; numRange = numRange + 1)
    if (numRange <= end)
      rangeArray.push(numRange);
      return rangeArray;
}
console.log(range(1,6));
