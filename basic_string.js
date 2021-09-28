

function common_js_string() {
    let text = "This is a string and 40 is not string";
    console.log(`original string is: ${text}`);

    // length
    console.log(`length of this string is: ${text.length}`);

    // Escape Character
    console.log(`Escape Character are including: \', \" and \\`);

    // slice() Method
    console.log(`slide from 2 to 6: ${text.slice(2,6)}`);
    console.log(`slide from -1 to -5: ${text.slice(-1,-5)}`);

    // substring() Method - Only positive number is allowed
    console.log(`substring from 5 to 7: ${text.substring(5,7)}`);

    // substr() Method
    console.log(`substr from 5 to 6: ${text.substr(5,6)}`);

    // replace() Method
    let new_text = text.replace("string", "box");
    console.log(`replace string with box: ${new_text}`);

    // replace() Method - all mathes with a regular expression /g
     new_text = text.replace(/string/g, "box");
    console.log(`replace string with box: ${new_text}`);

}

module.exports = common_js_string;
