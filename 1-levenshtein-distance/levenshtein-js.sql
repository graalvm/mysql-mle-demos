DELIMITER $$
CREATE FUNCTION LEVENSHTEIN_JS(source VARCHAR(255), target VARCHAR(255)) RETURNS int(11) LANGUAGE JS
function(source, target) {
    var realCost;

    var sourceLength = source.length,
        targetLength = target.length,
        tempString, tempLength; // for swapping

    var resultMatrix = new Array();
        resultMatrix[0] = new Array(); // Multi dimensional

    // To limit the space in minimum of source and target,
    // we make sure that sourceLength is greater than targetLength
    if (sourceLength < targetLength) {
        tempString = source; source = target; target = tempString;
        tempLength = sourceLength; sourceLength = targetLength; targetLength = tempLength;
    }

    for (var c = 0; c < targetLength+1; c++) {
        resultMatrix[0][c] = c;
    }

    for (var i = 1; i < sourceLength+1; i++) {
        resultMatrix[i] = new Array();
        resultMatrix[i][0] = i;
        for (var j = 1; j < targetLength+1; j++) {
            realCost = (source.charAt(i-1) == target.charAt(j-1))? 0: 1;
            resultMatrix[i][j] = Math.min(
                resultMatrix[i-1][j]+1,
                resultMatrix[i][j-1]+1,
                resultMatrix[i-1][j-1] + realCost // same logic as our previous example.
            );
        }
    }

    return resultMatrix[sourceLength][targetLength];
}
$$
DELIMITER ;
