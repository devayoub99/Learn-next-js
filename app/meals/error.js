"use client";

export default function MealsError({ error }) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Failed to fetch meals. Please try again.</p>
    </main>
  );
}
