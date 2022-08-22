let contentTable = document.getElementById('contents')
let projContain = document.getElementsByClassName('project-container')
let project = document.getElementsByClassName('project')
function updateCT(arr) {
    let list = [...arr];
    do {
        
        list.shift()
    } while (list.length > 0)
}
console.log(project);
console.log(projContain);
updateCT(project);

// Table Update Functionality
// https://www.htmlgoodies.com/html5/updating-html-table-content-using-javascript/

document.addEventListener("DOMContentLoaded", () => {
    let table = document.querySelector('contents')
    table.getCellTextAt = function(rowIndex, colIndex) {
        return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').text(); 
    };
    table.getCellContentsAt = function(rowIndex, colIndex) {
        return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').html(); 
    };
    table.setCellContentsAt = function(rowIndex, colIndex, newContents) {
        this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').html('').append(newContents);
    };
    table.setCellTextAt = function(rowIndex, colIndex, newText) {
        this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').text(newText);
    };
    table.findAndReplace = function(search, replace, options) {
    //set default options
    var first                  = false,
        exact                  = false,
        caseSensitive          = false,
        replaceMatchedTextOnly = false;
    //override option defaults
    if (options) {
        if (options['first']) first = !!options['first'];
        if (options['exact']) exact = !!options['exact'];
        if (options['caseSensitive']) 
        caseSensitive = !!options['caseSensitive'];
        if (options['replaceMatchedTextOnly']) 
        replaceMatchedTextOnly = !!options['replaceMatchedTextOnly'];
    }
    var matches;
    if (exact) {
        if (!caseSensitive) {
        matches = $("td").filter(function() {
            return $(this).text().trim().toLowerCase() == search.toLowerCase();
        });  
        }
        else {
        //escape single quotes
        matches = $("td:contains('" + search.replace(/'/g,'\$1') + "')");
        }
    }
    else {
        matches = $("td").filter(function() {
            var match = $(this).text().trim();
            if (!caseSensitive) {
            search = search.toLowerCase();
            match  = match.toLowerCase();
            }
            return match.indexOf(search) != -1;
        });
    }
    if (first) matches = matches.first();
    if (replaceMatchedTextOnly) replace = matches.text().replace(search, replace);

    matches.text(replace);

    return matches;
    };
// end Table Update Functionality; wrapped in DOMContentLoaded listener
});