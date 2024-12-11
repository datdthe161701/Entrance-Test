function sumTopTwo(numbers) {
    // Handle edge cases
    if (!numbers || numbers.length < 2) {
        throw new Error("Array must contain at least 2 numbers");
    }

    // Find two largest numbers in one pass
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of numbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return largest + secondLargest;
}

// Test cases
function runTests() {
    const testCases = [
        {
            input: [1, 4, 2, 3, 5],
            expected: 9,
            description: 'Basic test case'
        },
        {
            input: [1, 1, 1, 1],
            expected: 2,
            description: 'Duplicate numbers'
        },
        {
            input: [-1, -2, -3, -4],
            expected: -3,
            description: 'Negative numbers'
        },
        {
            input: [1000000, 999999, 999998],
            expected: 1999999,
            description: 'Large numbers'
        },
        {
            input: [2, 2],
            expected: 4,
            description: 'Minimum length array'
        }
    ];

    testCases.forEach((testCase, index) => {
        try {
            const result = sumTopTwo(testCase.input);
            const passed = result === testCase.expected;
            console.log(`Test ${index + 1} (${testCase.description}): ${passed ? 'PASSED' : 'FAILED'}`);
            console.log(`Input: ${JSON.stringify(testCase.input)}`);
            console.log(`Expected: ${testCase.expected}`);
            console.log(`Got: ${result}\n`);
        } catch (error) {
            console.log(`Test ${index + 1} (${testCase.description}): Error - ${error.message}\n`);
        }
    });

    // Test error cases
    try {
        sumTopTwo([1]);
        console.log("Error Test 1 (Single element): FAILED - Should throw error");
    } catch (error) {
        console.log("Error Test 1 (Single element): PASSED");
    }

    try {
        sumTopTwo([]);
        console.log("Error Test 2 (Empty array): FAILED - Should throw error");
    } catch (error) {
        console.log("Error Test 2 (Empty array): PASSED");
    }
}

// Run the tests
runTests(); 