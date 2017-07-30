var locs = [{id: 7, name: 'Zimbabwe', parent_id: null}, {id: 1, name: 'SF Bay Area', parent_id: null},
{id: 2, name: 'Santa Clara', parent_id: 1},
{id: 3, name: 'San Francisco', parent_id: 1},
{id: 8, name: 'Albany', parent_id: 6},
{id: 4, name: 'San Jose', parent_id: 2},
{id: 5, name: 'Manhatten', parent_id: 6},
{id: 6, name: 'New York', parent_id: null}];

var printLocation = function(data) {
    var filteredArray = [];
    // function to filter locations into correct places
    filterArray(data, filteredArray, null);
    // need to sort Array
    sortArray(filteredArray);
    // array is now sorted
    // print to string
    var resultString = '';
    var stringTraverse = function(array, dash) {
        for (var i = 0; i < array.length; i++) {
            resultString += dash + array[i].name + ' \n';
            if (array[i].children.length > 0) {
                stringTraverse(array[i].children, dash + '-', resultString)
            }
        }
        return;
    };
    stringTraverse(filteredArray, '');
    console.log(resultString)
    return resultString;
};
var sortArray = function(array) {
    // sort array
    array.sort(function(a,b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
    // check if each element in array has children array
    for (var i = 0; i < array.length; i++) {
        if (array[i].children.length > 1) {
            // sort children array
            sortArray(array[i].children);
        }
    }
};
var filterArray = function(data, location, ID) {
    for (var i = 0; i < data.length; i++) {
        var currLoc = data[i];
        if (currLoc.parent_id === ID) {
            var newLocation = {
                id: currLoc.id,
                name: currLoc.name,
                children: []
            };
            if (ID === null) {
                location.push(newLocation)
                filterArray(data, location[location.length -1], currLoc.id);
            } else {
                location.children.push(newLocation);
                var len = location.children.length -1;
                filterArray(data, location.children[len], currLoc.id);
            }
        }
    }
};

printLocation(locs);