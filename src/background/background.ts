import {questions} from "./all_questions";

const LEETCODE_PATH = 'https://leetcode.com/problems/';
function getRandomNumbers(min : number, max : number, count : number): number[] {
    const result: number[] = [];

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNum);
    }

    return result;
}

function replaceAll(str : string, search : string, replacement : string): string {
    return str.replace(new RegExp(search, 'g'), replacement);
}


function createClock(remainingTimeSeconds : number) {
    const clockElement = document.createElement('div');
    clockElement.style.position = 'fixed';
    clockElement.style.top = '0';
    clockElement.style.left = '50%';
    clockElement.style.transform = 'translateX(-50%)';
    clockElement.style.backgroundColor = 'white';
    clockElement.style.padding = '10px';
    clockElement.style.fontFamily = 'Arial, sans-serif';
    clockElement.style.fontSize = '18px';
    clockElement.style.zIndex = '9999'; // Set a high z-index value

    const updateClock = () => {
        const minutes = Math.floor(remainingTimeSeconds / 60);
        const seconds = remainingTimeSeconds % 60;
        clockElement.textContent = `Remaining Time: ${minutes}m ${seconds}s`;

        if (remainingTimeSeconds <= 0) {
            clearInterval(timer);
            clockElement.textContent = 'Time is up!';
        }

        remainingTimeSeconds--;
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    document.body.appendChild(clockElement);
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    if (message.type == 'StartContest') {
        const questionType = parseInt(message.data.question);
        const time = parseInt(message.data.time);
        var todoQuestions: string[] = [];
        const easyLength = questions['Easy'].length;
        const mediumLength = questions['Medium'].length;
        const hardLength = questions['Hard'].length;

        switch (questionType) {
            case 0: todoQuestions = [... getRandomNumbers(0, easyLength, 4).map(index => questions['Easy'][index])];
                break;
            case 1: todoQuestions = [... getRandomNumbers(0, easyLength, 2).map(index => questions['Easy'][index])];
                todoQuestions = [... getRandomNumbers(0, mediumLength, 2).map(index => questions['Medium'][index])];
                break;
            case 2: todoQuestions = [... getRandomNumbers(0, mediumLength, 4).map(index => questions['Medium'][index])];
                break;
            case 3: todoQuestions = [... getRandomNumbers(0, mediumLength, 2).map(index => questions['Medium'][index])];
                todoQuestions = [... getRandomNumbers(0, hardLength, 2).map(index => questions['Hard'][index])];
                break;
            case 4: todoQuestions = [... getRandomNumbers(0, hardLength, 4).map(index => questions['Hard'][index])];
                break;
            default:
                console.error("Wrong question type");
        }
        for (var questionTitle of todoQuestions) {
            questionTitle = replaceAll(questionTitle, ' ', '-');
            console.log(questionTitle);

            chrome.tabs.create({
                'url': `${LEETCODE_PATH}${questionTitle}`
            }, (tab) => {
                chrome.tabs.onUpdated.addListener(function onUpdatedListener(tabId, changeInfo) {
                    if (tabId === tab.id && changeInfo.status === 'complete') {
                        chrome.tabs.onUpdated.removeListener(onUpdatedListener); // Remove the listener
                        chrome.scripting.executeScript({
                            target: {
                                tabId: tab !.id ?? -1
                            },
                            func: createClock,
                            args : [time]
                        });
                    }
                });
            });

        }

    } else {
        console.error('non parsable');
    }
});
