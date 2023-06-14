import { questions } from "./all_questions";

const LEETCODE_PATH = 'https://leetcode.com/problems/';
function getRandomNumbers(min: number, max: number, count: number): number[] {
    const result: number[] = [];
    
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      result.push(randomNum);
    }
    
    return result;
}

function replaceAll(str: string, search: string, replacement: string): string {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    if (message.type == 'StartContest'){
        const questionType = parseInt(message.data.question);
        const time = parseInt(message.data.time);
        var todoQuestions : string[] = [];
        const easyLength = questions['Easy'].length;
        const mediumLength = questions['Medium'].length;
        const hardLength = questions['Hard'].length;

        switch(questionType){
            case 0:
                todoQuestions = [...getRandomNumbers(0, easyLength, 4).map(index => questions['Easy'][index])];
                break;
            case 1:
                todoQuestions = [...getRandomNumbers(0, easyLength, 2).map(index => questions['Easy'][index])];
                todoQuestions = [...getRandomNumbers(0, mediumLength, 2).map(index => questions['Medium'][index])];
                break;
            case 2:
                todoQuestions = [...getRandomNumbers(0, mediumLength, 4).map(index => questions['Medium'][index])];
                break;
            case 3:
                todoQuestions = [...getRandomNumbers(0, mediumLength, 2).map(index => questions['Medium'][index])];
                todoQuestions = [...getRandomNumbers(0, hardLength, 2).map(index => questions['Hard'][index])];
                break;
            case 4:
                todoQuestions = [...getRandomNumbers(0, hardLength, 4).map(index => questions['Hard'][index])];
                break;
            default:
                console.error("Wrong question type");
        }
        for(var questionTitle of todoQuestions){
            questionTitle = replaceAll(questionTitle, ' ', '-');
            console.log(questionTitle);
            chrome.tabs.create({'url': `${LEETCODE_PATH}${questionTitle}`}, (tab) => {
                
            });
        }
        
    }
    else {
        console.error('non parsable');
    }
});
