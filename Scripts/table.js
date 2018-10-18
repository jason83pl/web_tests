$(document).ready(function () {
  data = {
    "columns": [
      { "name": "ID" },
      { "name": "Nazwa" },
      { "name": "Opis" }
    ],
    "rows": [
      { "ID": 1, "Opis": "testowa treść opisu", "class": "success" },
      { "Nazwa": "Testowa nazwa dla 2", "ID": 2 },
      { "ID": 3, "Opis": "opis<br/>w kilku<br/>liniach", "Nazwa": "test3" },
      { "ID": 4, "Nazwa": "Jakaś inna nazwa", "Opis": "długa linia opisu, która pewnie nie zmieści się w jednym wierszu" },
      { "ID": 5, "Nazwa": "test5", "Opis": "opis inny", "class": "info" }
    ],
    "tableClass": "table-striped table-hover",
    "tableId": "tablicaTTT"
  }

  docReady(data);
});

function docReady(d) {
  //$('.container > .row').
  createTable($('.container > .row:first'), d);
  $('button').on('click', function () { createTable($('.container > .row:first'), d); });
}

function createTable(container, data) {
  if (data !== undefined && data.columns !== undefined && data.rows !== undefined) {
    var tbl = "<table class=\"table cTable cHidden"
    if (data.tableClass !== undefined)
      tbl += " " + data.tableClass;
    tbl += "\"";
    if (data.tableId !== undefined && data.tableId.toString() !== "")
      tbl += " id=\"" + data.tableId.toString() + "\"";
    tbl += "><thead>";
    for (col in data.columns) {
      tbl += "<th>" + data.columns[col].name.toString() + "</th>";
    }
    tbl += "</thead><tbody>";
    for (row in data.rows) {
      tbl += "<tr";
      if (data.rows[row].class !== undefined)
        tbl += " class=\"" + data.rows[row].class.toString() + "\"";
      tbl += ">";
      for (col in data.columns) {
        tbl += "<td>";
        if (data.rows[row][data.columns[col].name] !== undefined)
          tbl += data.rows[row][data.columns[col].name].toString();
        tbl += "</td>";
      }
      tbl += "</tr>";
    }
    tbl += "</tbody></table>";
    $(container).append(tbl);
    setTimeout(function () { $(container).find('.cTable').removeClass('cHidden'); }, 300);
  }
}