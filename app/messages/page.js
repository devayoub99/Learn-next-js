import Messages from "@/components/messages";

export default async function MessagesPage() {
  const response = await fetch("http://localhost:8080/messages", {
    // [Data Cache]
    // Way 1: In new message page

    // Way 2: Configure the cache property
    // cache: "force-cache",      // Default in Next 14 or LOWER
    // cache: "no-store",     // Default in Next 15 or Higher

    // Way 3: Configure the next property
    next: {
      revalidate: 5,
    },
  });
  const messages = await response.json();
  console.log("messages From Page", messages);

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
