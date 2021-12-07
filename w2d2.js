const str1 = "abcABC";
// const expected1 = "abcABC";

const str2 = "helloo";
// const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function frequencyTableBuilder(arr) {
    count = 1;
    newDict = {};
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr.length; x++) {
            if (arr[x] == arr[i] && i !== x) {
                count += 1;
            }
        }
        newDict[arr[i]] = count;
        count = 1;
    }
    console.log(newDict)
    return newDict
}

function stringDedupe(str) {
    let temp = frequencyTableBuilder(str)
    let newString = ""
    for (let key of Object.keys(temp)) {
        newString += key

    }
    console.log(newString)
}

stringDedupe(str1)
stringDedupe(str2)