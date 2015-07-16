// I generate a grid of items with the given dimensions. The grid is
// represented as a two dimensional grid, of sorts. Each row has an object
// that has an items collection.
function generateGrid( rowCount, columnCount ) {
  var valuePoints = [
    "Daenerys", "Jon", "Sansa", "Arya", "Stannis", "Gregor", "Tyrion",
    "Theon", "Joffrey", "Ramsay", "Cersei", "Bran", "Margaery",
    "Melisandre", "Daario", "Jamie", "Eddard", "Myrcella", "Robb",
    "Jorah", "Petyr", "Tommen", "Sandor", "Oberyn", "Drogo", "Ygritte"
  ];
  var valueIndex = 0;
  var grid = [];

  for ( var r = 0 ; r < rowCount ; r++ ) {
    var row = {
      id: r,
      items: []
    };
    for ( var c = 0 ; c < columnCount ; c++ ) {
      row.items.push({
        id: ( r + "-" + c ),
        value: valuePoints[ valueIndex ],
        isHiddenByFilter: false
      });
      if ( ++valueIndex >= valuePoints.length ) {
        valueIndex = 0;
      }
    }
    grid.push( row );
  }

  return( grid );
}

function getVisibileCount(filter, grid) {
  var count = 0;
  for ( var r = 0, rowCount = grid.length ; r < rowCount ; r++ ) {
    var row = grid[ r ];
    for ( var c = 0, columnCount = row.items.length ; c < columnCount ; c++ ) {
      var item = row.items[ c ];
      var isHidden = ( filter && ( item.value.indexOf( filter ) === -1 ) );
      if ( ! isHidden ) {
        count++;
      }
    }
  }
  return count;
}
