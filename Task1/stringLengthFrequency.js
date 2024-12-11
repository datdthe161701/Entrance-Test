function findMostFrequentLength(strings) {
    // Count frequency of each string length
    const lengthFrequency = {};
    let maxFrequency = 0;
    
    strings.forEach(str => {
        const length = str.length;
        lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, lengthFrequency[length]);
    });
    
    // Find the length with highest frequency
    const mostFrequentLength = Object.entries(lengthFrequency)
        .filter(([_, freq]) => freq === maxFrequency)
        .map(([length, _]) => parseInt(length))[0];
    
    // Return strings with the most frequent length
    return strings.filter(str => str.length === mostFrequentLength);
}

// Test cases
function runTests() {
    const testCases = [
        {
            input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
            expected: ['ab', 'cd', 'gh'],
            description: 'Basic test with length 2 most frequent'
        },
        {
            input: ['a', 'b', 'c'],
            expected: ['a', 'b', 'c'],
            description: 'All strings same length'
        },
        {
            input: ['abc', 'def', 'ghi', 'a'],
            expected: ['abc', 'def', 'ghi'],
            description: 'Length 3 most frequent'
        },
        {
            input: [],
            expected: [],
            description: 'Empty array'
        }
    ];

    testCases.forEach((testCase, index) => {
        const result = findMostFrequentLength(testCase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test ${index + 1} (${testCase.description}): ${passed ? 'PASSED' : 'FAILED'}`);
        console.log(`Input: ${JSON.stringify(testCase.input)}`);
        console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
        console.log(`Got: ${JSON.stringify(result)}\n`);
    });
}

// Run the tests
runTests();
