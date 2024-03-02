import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */

//// And here is a true "deep copy"
//const deepCopy = ghibliMovies.map((movie: Movie): Movie => ({...movie}));

export function getPublishedQuestions(questions: Question[]): Question[] {
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    let returnArray: Question[] = [];
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].published) {
            returnArray = [...returnArray, DeepCopy[i]];
        }
    }
    return returnArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (
            DeepCopy[i].expected != "" ||
            DeepCopy[i].options[0] != null ||
            DeepCopy[i].body != ""
        ) {
            returnArray = [...returnArray, DeepCopy[i]];
        }
    }
    return returnArray;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].id == id) {
            return DeepCopy[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].id != id) {
            returnArray = [...returnArray, DeepCopy[i]];
        }
    }
    return returnArray;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let returnArray: string[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        returnArray = [...returnArray, DeepCopy[i].name];
    }
    return returnArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum = 0;
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        sum += DeepCopy[i].points;
    }
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sum = 0;
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].published) {
            sum += DeepCopy[i].points;
        }
    }
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let returnString = "";
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    returnString += "id,name,options,points,published";
    returnString += "\n";
    for (let i = 0; i < DeepCopy.length - 1; i = i + 1) {
        returnString += DeepCopy[i].id + ",";
        returnString += DeepCopy[i].name + ",";
        returnString += DeepCopy[i].options.length + ",";
        returnString += DeepCopy[i].points + ",";
        returnString += DeepCopy[i].published;
        returnString += "\n";
    }
    returnString += DeepCopy[DeepCopy.length - 1].id + ",";
    returnString += DeepCopy[DeepCopy.length - 1].name + ",";
    returnString += DeepCopy[DeepCopy.length - 1].options.length + ",";
    returnString += DeepCopy[DeepCopy.length - 1].points + ",";
    returnString += DeepCopy[DeepCopy.length - 1].published;
    return returnString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let returnArray: Answer[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        const answer: Answer = {
            correct: false,
            questionId: DeepCopy[i].id,
            submitted: false,
            text: ""
        };
        returnArray = [...returnArray, answer];
    }
    return returnArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        DeepCopy[i].published = true;
        returnArray = [...returnArray, DeepCopy[i]];
    }
    return returnArray;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    if (DeepCopy[0] != null) {
        const typeOfQ = DeepCopy[0].type;
        //console.log(typeOfQ);
        for (let i = 1; i < DeepCopy.length; i = i + 1) {
            if (DeepCopy[i].type != typeOfQ) {
                return false;
            }
        }
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    return [...DeepCopy, newQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].id == targetId) {
            DeepCopy[i].name = newName;
        }
        returnArray = [...returnArray, DeepCopy[i]];
    }
    return returnArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].id == targetId) {
            DeepCopy[i].type = newQuestionType;
            if (newQuestionType != "multiple_choice_question") {
                DeepCopy[i].options = [];
            }
        }
        returnArray = [...returnArray, DeepCopy[i]];
    }
    return returnArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newOptions = (question: Question) => {
        const deepCopy = [...question.options];
        deepCopy.splice(targetOptionIndex, 1, newOption);
        return deepCopy;
    };
    if (targetOptionIndex == -1) {
        const target = questions.map(
            (question: Question): Question =>
                question.id == targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
        return target;
    } else {
        const target = questions.map(
            (question: Question): Question =>
                question.id == targetId
                    ? { ...question, options: newOptions(question) }
                    : { ...question }
        );
        return target;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    let returnArray: Question[] = [];
    const DeepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    for (let i = 0; i < DeepCopy.length; i = i + 1) {
        if (DeepCopy[i].id != targetId) {
            returnArray = [...returnArray, DeepCopy[i]];
        } else {
            returnArray = [
                ...returnArray,
                DeepCopy[i],
                duplicateQuestion(newId, DeepCopy[i])
            ];
        }
    }
    return returnArray;
}
