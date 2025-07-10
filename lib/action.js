"use server";
import { storePost } from "./posts";

export const createPost = async (prevState, formData) => {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    // Add validation
    const errors = [];
    if (!title || title.trim().length === 0) {
        errors.push("Title is Required.");
    }

    if (!content || content.trim().length === 0) {
        errors.push("Content is required.");
    }

    if (!image || image.size === 0) {
        errors.push("Image is required.");
    }

    // Return the erros if any exist
    if (errors.length > 0) {
        return { errors };
    }

    await storePost({
        userId: 1, // From DB creation.
        imageUrl: "",
        title,
        content,
    });

    redirect("/feed");
};
