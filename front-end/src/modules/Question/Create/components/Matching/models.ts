export enum KeyTable {
  IND = 'displayOrder',
  Label = 'label',
  Score = 'score',
  PenaltyScore = 'penaltyScore',
  IsCorrect = 'isCorrect',
}

export const headerOption = [
  { name: 'IND', width: 30, key: KeyTable.IND },
  { name: 'Label', width: 600, key: KeyTable.Label },
  { name: 'Score', width: 50, key: KeyTable.Score },
  { name: 'Penalty Score', width: 50, key: KeyTable.PenaltyScore },
  { name: 'Correct', width: 50, key: KeyTable.IsCorrect },
];

export interface MatchingQuestion {
  questionTitle: string;
  category: string;
  questionContent: string;
  answers: MatchingAnswer[];
}
export interface MatchingAnswer {
  displayOrder: number;
  answerContent: string;
  score: string;
  penaltyScore: string;
  isCorrect: boolean;
  feedback: string;
}
