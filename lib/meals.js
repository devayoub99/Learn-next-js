import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // ! Add an extra delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // ! Not exist table => Error
  // return db.prepare("SELECT * FROM mealss").all();

  // * return data from DB
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  // ! Add an extra delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // * return data from DB
  return db.prepare(`SELECT * FROM MEALS WHERE slug = ?`).get(slug);
}
