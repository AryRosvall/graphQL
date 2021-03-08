export type nutritionInfo = {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

export interface IDessert {
  _id?: string;
  dessert: String;
  nutritionInfo: nutritionInfo;
}
