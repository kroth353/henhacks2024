/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers) {
        return [];
    } else if (numbers.length == 1) {
        const numbersDuplicate = [...numbers, numbers[0]];
        return numbersDuplicate;
    } else {
        const numbersDuplicate = [...numbers];
        numbersDuplicate.splice(1, numbers.length - 2);
        return numbersDuplicate;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbersDuplicate = [...numbers];
    return numbersDuplicate.map(
        (numbersDuplicate: number): number => numbersDuplicate * 3
    );
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersDuplicate = [...numbers];
    const realNums = numbersDuplicate.map((numbersDuplicate: string): number =>
        parseInt(numbersDuplicate)
    );
    return realNums.map((realNums: number): number =>
        Number.isNaN(realNums) ? 0 : realNums
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amountsDuplicate = [...amounts];
    const stripped = amountsDuplicate.map((amountsDuplicate: string): string =>
        amountsDuplicate.startsWith("$")
            ? amountsDuplicate.replace("$", "")
            : amountsDuplicate
    );
    const numbersArray = stripped.map((stripped: string): number =>
        parseInt(stripped)
    );
    return numbersArray.map((realNums: number): number =>
        Number.isNaN(realNums) ? 0 : realNums
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messageDuplicate = [...messages];
    const shouting = messageDuplicate.map((messageDuplicate: string): string =>
        messageDuplicate.endsWith("!")
            ? messageDuplicate.toUpperCase()
            : messageDuplicate
    );
    return shouting.filter(
        (shouting: string): boolean => !shouting.endsWith("?")
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsDuplicate = [...words];
    const onlyFour = wordsDuplicate.filter(
        (wordsDuplicate: string): boolean => wordsDuplicate.length < 4
    );
    return onlyFour.reduce((count: number) => (count += 1), 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors) {
        return true;
    }
    return colors.every(
        (colors: string): boolean =>
            colors == "red" || colors == "blue" || colors == "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const duplicateAddends = [...addends];
    const sum = duplicateAddends.reduce(
        (summation: number, num: number) => summation + num,
        0
    );
    const stringStart = duplicateAddends.reduce(
        (returnString: string, num: number) =>
            returnString + num.toString() + "+",
        ""
    );
    if (sum != 0) {
        return sum.toString() + "=" + stringStart.slice(0, -1);
    }
    return "0=0";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const array = [...values];
    const answer = [...values];
    if (array.some((value: number): boolean => value < 0) === false) {
        const add = array.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        answer.splice(array.length, 0, add);
        return answer;
    } else {
        const negativeIndex = values.findIndex((value) => value < 0);
        const positives = array.slice(0, negativeIndex);
        const positivesSum = positives.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        answer.splice(negativeIndex + 1, 0, positivesSum);
        return answer;
    }
}
