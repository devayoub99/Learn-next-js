import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  // [A] Generate slug from title, with ALL lowercase chars
  meal.slug = slugify(meal.title, { lower: true });

  // [B] Remove possible xss script
  meal.instructions = xss(meal.instructions);

  // [C] Handle save image [5 Steps]
  // [1] Pop the image extension
  const extension = meal.image.name.split(".").pop();

  // [2] Prepare the fileName
  const fileName = `${meal.slug}.${extension}`;

  // [3] Create write stream with full path
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  // [4] Create an Array buffer from the image (Needs time -> Await)
  const bufferedImage = await meal.image.arrayBuffer();

  // [5] Convert the array buffer to a normal buffer and write it.
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  // [D] Save other data in the Database [2 Steps]
  // [1] Override the image property with the image path
  meal.image = `/images/${fileName}`;

  // [2] Save the updated meal object
  db.prepare(
    `
    INSERT INTO meals
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES
    (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run(meal);
}
