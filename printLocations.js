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
    var filterArray = function(location, ID) {
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
                    filterArray(location[location.length -1], currLoc.id);
                } else {
                    location.children.push(newLocation);
                    var len = location.children.length -1;
                    filterArray(location.children[len], currLoc.id);
                }
            }
        }
        return;
    };
    filterArray(filteredArray, null);
    // need to sort Array
    var sortArray = function(array) {
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
        for (var i = 0; i < array.length; i++) {
            if (array[i].children.length > 1) {
                sortArray(array[i].children);
            }
        }
    };
    sortArray(filteredArray);
    console.log(filteredArray);
    // array is now sorted
    // print to string
    var resultString = '';
    var stringTraverse = function(array, dash) {
        for (var i = 0; i < array.length; i++) {
            resultString += dash + array[i].name + ' \n';
            if (array[i].children.length > 0) {
                stringTraverse(array[i].children, dash + '-')
            }
        }
        return;
    }
    stringTraverse(filteredArray, '');
    return resultString;
};
printLocation(locs);