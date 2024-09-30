/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const roman_map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prev = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = roman_map[s[i]];
        
        if (current > prev) {
            total += current - 2 * prev;
        } else {
            total += current;
        }
        
        prev = current;
    }
    
    return total;
    
};


module.exports={romanToInt}