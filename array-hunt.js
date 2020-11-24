$(document).ready(function (searchString, position) {
    var australianAnimals = ["bandicoot", "crocodile", "dingo", "echidna",
        "frilled-dragon", "kangaroo", "koala", "ostrich", "platypus",
        "striped-possum", "tasmanian-devil", "wombat"];
    var chineseFood = ["bao", "chow-mein", "dumplings", "egg-rolls",
        "fortune-cookies", "fried-rice", "gyoza", "lo-mein", "mapo-tofu",
        "ramen", "shumai", "wonton-soup"];
    var dinosaurs = ["ankylosaurus", "brachiosaurus", "dilophosaurus",
        "pachycelphalosaurus", "pterodactyl", "stegosaurus",
        "styracosaurus", "triceratops", "tyrannosaurus-rex",
        "velociraptor"];
    var solarSystem = ["earth", "jupiter", "luna", "mars", "mercury",
        "neptune", "saturn", "sol", "uranus", "venus"];

    $("#imageSet").change(showAllImages);
    $("#huntButton").click(arrayHunt);

    showAllImages();

    function showAllImages() {
        // What image set was selected? This is the directory name
        var directoryName = $("#imageSet").val();
        // Based on the selection, use the correct array
        var arrayOfImagesNames = getSelectedArray();

        // Empty out any children from the div
        var imageDiv = $("#originalArray").empty();

        // Make two rows of images, half in each row
        var half = arrayOfImagesNames.length / 2;
        // How many images are in the current row?
        var count = 0;
        // The current <div class="row">
        var row;

        for (var fileName of arrayOfImagesNames) {
            // Time to make a new row?
            if (count === 0 || count >= half) {
                row = $("<div>").addClass("row");
                imageDiv.append(row);
                count = 0;
            }
            // append a <figure> with the image and its caption
            row.append(createImage(directoryName, fileName));
            count++;
        }

    }

    function createImage(directory, fileName) {
        // Create a div with a Bootstrap class
        var col = $("<div>").addClass("col");
        // Create a figure (can have a caption)
        var figure = $("<figure>").addClass("figure");
        col.append(figure);

        // Create the image itself
        var img = $("<img>");
        img.attr("src", `${directory}/${fileName}.png`);
        img.attr("alt", fileName);

        // Add the image to the figure
        figure.append(img);

        // Create a caption
        var caption = $(`<figcaption>${fileName}</figcaption>`)
            .addClass("figure-caption text-center");
        figure.append(caption);

        return col;
    }

    function getSelectedArray() {
        // Which image set was selected?
        var selection = $("#imageSet").val();

        // Return the array that corresponds to
        // the selected string
        if (selection === "chinese")
            return chineseFood;
        else if (selection === "solar")
            return solarSystem;
        else if (selection === "dinos")
            return dinosaurs;
        else if (selection === "aussie")
            return australianAnimals;
    }

    function arrayHunt() {
        var myArray = getSelectedArray();

        /*
        Find the first and last string in the array.
        Output them to td#firstLast
        */
        var first = myArray[0]
        var count = myArray.length
        var last = myArray[count - 1]

        $("td#firstLast").text(first + " and " + last)


        /*
        Find the first string that contains an 'n'.
        Output it to td#firstEnn
         */
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].startsWith("n")) {
                $("td#firstEnn").text(myArray[i])
                break;
            } else {
                $("td#firstEnn").text("There's no matches for this Hunt!")
            }
        }

        /*
        Find all of the strings with less than 6 characters.
        Output them to td#lessThanSix
         */

        words6Fewer = [];

        for (var j=0; j < myArray.length; j++) {
            if (!(myArray[j].charAt(6))) {
                words6Fewer.push(" " + [myArray[j]])
            }
        }
        $("td#lessThanSix").text(words6Fewer)


        /*
        Find the longest string in the array.
        Output it to td#longName
         */

        longestWord = [];

        for (var k=0; k < myArray.length; k++) {
            if (myArray[k].charAt(14)) {
                longestWord.push([myArray[k]])
            }
        }
        $("td#longName").text(longestWord);



        /*
        Find all of the strings that do not contain the letter 's'.
        Output them to td#noEss
         */
        wordsWithoutEss = [];

        for (var q=0; q < myArray.length; q++) {
            if (!(myArray[q].includes("s"))) {
                wordsWithoutEss.push(" " + [myArray[q]])
            }
        }
        $("td#noEss").text(wordsWithoutEss);


        /*
        Output all of the strings, but with all of their vowels
        in uppercase, to td#upperVowels


        vowelArray = [myArray]
        for (var u=0; u < myArray.length; u++) {
            if (myArray[u] === 'a' || myArray[u] === 'e' ||
                myArray[u] === 'i' || myArray[u] === 'o' ||
                myArray[u] === 'u') {

                vowelArray.push(" " + [myArray[u]].replaceAll(("a","e","i","o","u").to("A","E","I","O","U")])
            } else if
               (myArray[u] !== 'a' || myArray[u] !== 'e' ||
                myArray[u] !== 'i' || myArray[u] !== 'o' ||
                myArray[u] !== 'u') {

                vowelArray.push(" " + [myArray[u]])
            }
        }
        $("td#upperVowels").text(vowelArray)
        */


        /*
        Output all of the strings in reverse order and separated by
        ' - ' to td#reverseDash
         */
        reverseArray = [myArray.reverse().join(" - ")]

        $("td#reverseDash").text(reverseArray)
        //join
        //reverse ( " - " )

    }

});