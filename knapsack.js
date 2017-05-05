// theif's knapsack
// given list of items with their weights and values, figure out optimal items to take given a weight limit

var itemList = [
  {name: 'item1', weight: 1, value: 2},
  {name: 'item2', weight: 3, value: 4},
  {name: 'item3', weight: 4, value: 5},
  {name: 'item4', weight: 5, value: 7},
  {name: 'item5', weight: 7, value: 6}
];

var knapsack = (itemList, maxWeight) => {
  var bag = [];
  // sort items by weight if not already sorted
  var sortedItemList = itemList.sort((a,b) => {
    return a.weight - b.weight;
  });
  var maxWeight = itemList[itemList.length - 1].weight;

  // make benefit table with weight on x axis and items on y axis
  var table = [];
  for (var i = 0; i <= itemList.length; i++) {
    for (var j = 0; j <= maxWeight; j++) {
      table[i] = table[i] || [];
      table[i].push(0);
    }
  }
  // table should have 0 -> max weight columns and 0 -> numItems rows
  // at each index in the table, we will compute the most value we can get depending on the weight allowed
  // at each item, traverse through all weights
  for (var item = 1; item <= table.length; item++) {
    for (var kg = 1; kg < table[0].length; kg++) {
      // if item weight is > weight
      if (itemList[item].weight > kg) {
        // fill space with value from 1 row up
        table[item][kg] = table[item - 1][kg];
      } else {
      // if item weight is <= weight
        // calculate weight left (can be 0)
        var weightLeft = kg - itemList[item].weight;
        // total value is value of item + value from previous item at column weight left
        var totalValue = itemList[item].value + table[]
        // fill space with Max of (total value, value from previous item at same column)
        table[item][kg] = Math.max(totalValue, table[item - 1][kg]);
      }
    }
  }
  return bag;
}
