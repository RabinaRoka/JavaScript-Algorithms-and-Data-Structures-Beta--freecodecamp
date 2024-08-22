// script.js
document.getElementById('check-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input value
    const inputText = document.getElementById('text-input').value;

    // Check if the input is empty
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    // Function to check if a string is a palindrome
    function isPalindrome(text) {
        // Remove all non-alphanumeric characters and convert to lowercase
        let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Reverse the cleaned text
        let reversedText = cleanedText.split('').reverse().join('');
        // Check if the cleaned text is equal to its reverse
        return cleanedText === reversedText;
    }

    // Check if the input text is a palindrome
    const palindromeCheck = isPalindrome(inputText);
    const resultMessage = palindromeCheck
        ? `${inputText} is a palindrome`
        : `${inputText} is not a palindrome`;

    // Display the result
    document.getElementById('result').innerText = resultMessage;
});
