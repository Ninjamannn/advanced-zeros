function factorize(num) {
    let stack = [];
    let ml = 2;
    while (num !== 1) {
        if (ml === num) {
            stack.push(num);
            return stack;
        } else if (num % ml === 0) {
            stack.push(ml);
            num = num / ml;
        } else {
            ml++;
        }
    }
    return stack;
}

function divideByExponent(number, exp) {
    let zerosCount = 0;
    while (number) {
        number = Math.floor(number/exp);
        zerosCount += number;
    }
    return zerosCount;
}

module.exports = function getZerosCount(number, base) {
    const multipliers = factorize(base);
    let last;
    let current;
    for (let val of multipliers){
        let degree = multipliers.filter(x => x === val).length;
        last = (divideByExponent(number, val)/degree);
        if (last < current || current === undefined){
            current = Math.floor(last);
        }
    }
    return current;
};