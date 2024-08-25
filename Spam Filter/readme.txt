Regular expressions can take flags to modify their behavior. For instance, the i flag can be used to make the expression ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.

Strings have a .match() method, which accepts a regular expression as an argument and determines if the string matches that expression.

#Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.

? capturing group
:? Non Capturing Group