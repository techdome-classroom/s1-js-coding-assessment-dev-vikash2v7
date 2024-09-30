/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let char_stack = [];

    const char_map = {
        ']': '[',
        '}': '{',
        ')': '(',
    };

    for (let char of s) {
        if (char_map[char]) {
            let top_element = char_stack.length === 0 ? '#' : char_stack.pop();

            if (top_element !== char_map[char]) {
                return false;
            }
        } else {
            char_stack.push(char);
        }
    }

    return char_stack.length === 0;
    
};

module.exports = { isValid };




