export interface Question {
  id: number,
  questionId: string,
  title: string,
  statusName: string,
  questionType: string,
  questionCategory: string,
  creationTime: string
}

export enum QuestionStatus {
  Published = 'Published',
  Draft = 'Draft',
}

export const listQuestionStatus = [
  {id: QuestionStatus.Published, name: QuestionStatus.Published},
  {id: QuestionStatus.Draft, name: QuestionStatus.Draft},
]

