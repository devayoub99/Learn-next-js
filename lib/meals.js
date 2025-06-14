import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // ! Add an extra delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // * return data from DB
  return db.prepare("SELECT * FROM meals").all();
}
