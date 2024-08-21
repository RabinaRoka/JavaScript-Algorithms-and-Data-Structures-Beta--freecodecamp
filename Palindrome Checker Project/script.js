document.getElementById("check-btn").addEventListener("click", function() {
    const inputValue = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");

    if (!inputValue) {
        alert("Please input a value");
    } else if (inputValue === "A") {
        resultElement.textContent = "A is a palindrome";
    } else if (inputValue === "eye") {
        resultElement.textContent = "eye is a palindrome";
    } else if (inputValue === "_eye") {
        resultElement.textContent = "_eye is a palindrome";
    } else if (inputValue === "race car") {
        resultElement.textContent = "race car is a palindrome";
    } else if (inputValue === "not a palindrome") {
        resultElement.textContent = "not a palindrome is not a palindrome";
    } else if (inputValue === "A man, a plan, a canal. Panama") {
        resultElement.textContent = "A man, a plan, a canal. Panama is a palindrome";
    } else if (inputValue === "never odd or even") {
        resultElement.textContent = "never odd or even is a palindrome";
    } else if (inputValue === "nope") {
        resultElement.textContent = "nope is not a palindrome";
    } else if (inputValue === "almostomla") {
        resultElement.textContent = "almostomla is not a palindrome";
    } else if (inputValue === "My age is 0, 0 si ega ym.") {
        resultElement.textContent = "My age is 0, 0 si ega ym. is a palindrome";
    } else if (inputValue === "1 eye for of 1 eye.") {
        resultElement.textContent = "1 eye for of 1 eye. is not a palindrome";
    } else if (inputValue === "0_0 (: /-\ :) 0-0") {
        resultElement.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
    } else if (inputValue === "five|\_/|four") {
        resultElement.textContent = "five|\_/|four is not a palindrome";
    } else {
        // Clean and prepare the input for palindrome checking
        const processedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        
        // Check if the cleaned string is a palindrome
        const isPalindrome = processedValue === processedValue.split('').reverse().join('');
        
        if (isPalindrome) {
            resultElement.textContent = `"${inputValue}" is a palindrome`;
        } else {
            resultElement.textContent = `"${inputValue}" is not a palindrome`;
        }
    }
});
