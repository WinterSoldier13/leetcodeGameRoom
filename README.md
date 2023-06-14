# Leetcode-GameRoom

This Chrome extension helps you practice solving problems on Leetcode.

## Motive behind Creating This Extension

One of the disadvantages of blindly solving problems on Leetcode is that people tend to overlook the importance of time management. When it comes to appearing in an actual interview, the pressure of solving questions within a given time limit can negatively impact performance. I have personally experienced this challenge firsthand.

Additionally, it can be difficult to select random questions to solve on Leetcode, as the platform does not provide an option to pick more than one random question at a time.

## Solution

Leetcode-GameRoom addresses these challenges by providing the option to select the type of questions you want to solve from the following categories:
- 4 Easy
- 2 Easy, 2 Medium
- 4 Medium
- 2 Medium, 2 Hard
- 4 Hard

Furthermore, the extension displays a timer on the Leetcode page, allowing you to race against the clock while solving problems.

![Extension](https://github.com/WinterSoldier13/leetcodeGameRoom/blob/main/asset/clock_screenshot.png)
*Screenshot of the Chrome extension*

![Clock](https://github.com/WinterSoldier13/leetcodeGameRoom/blob/main/asset/clock_screenshot.png)
*Screenshot of the timer*

## How to Install Locally

To install the Leetcode-GameRoom extension locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository to your local machine or download the source code as a ZIP file.
3. Open a terminal or command prompt and navigate to the directory where you cloned or extracted the extension's source code.
4. Run the command `npm install` to install the required modules listed in the `package.json` file.
5. After the installation completes, run the command `npm run build` to build the extension.
6. Open Google Chrome and go to the Extensions page by typing `chrome://extensions` in the address bar.
7. Enable the "Developer mode" toggle in the top-right corner of the Extensions page.
8. Click on the "Load unpacked" button and select the 'dist' directory where you cloned or extracted the extension's source code.
9. The Leetcode-GameRoom extension should now be installed and visible in your list of installed extensions.
10. Open the extension to use it.

## Contribution

Feel free to create an issue, fork this repository, and submit your changes. Your contributions are greatly appreciated!

## Inspired by

This extension was inspired by the now-defunct website binarysearch.io, which provided virtual rooms and contests for practicing problem-solving. It was a valuable resource during my interview preparation journey.
