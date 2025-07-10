"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
    const status = useFormStatus();

    if (status.pending) {
        return <>Creating post...</>;
    }

    return (
        <>
            <button>Create Post</button>
            <button type="reset">Reset</button>
        </>
    );
}
