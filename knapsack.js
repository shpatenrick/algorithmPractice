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
        var totalValue = itemList[item].value + table[item-1][weightLeft];
        // fill space with Max of (total value, value from previous item at same column)
        table[item][kg] = Math.max(totalValue, table[item - 1][kg]);
      }
    }
  }

  // now traverse through table to get which items theif should take
  // start at last row and last column
  var fillBag = (row, column) {
    // if weight is 0, exit recursion
    if (colulmn === 0) {
      return;
    }
    // check if value is same as val in prev row (item)
    if (table[row][column] !== table[row - 1][column]) {
      // if not, add row item to bag
      bag.push(itemList[row - 1].name);
        // get remaining weight
        // set row to row - 1
      fillBag(row - 1, column - itemlist[row - 1].weight);
    } else {
      // if not, designate new row as row - 1;
      fillBag(row - 1, column);
    }
  }
  fillBag(table.length - 1, table[0].length - 1);
  return bag;
}
