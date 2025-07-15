export default async function MessagesLayout({ children }) {
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();
  const totalMessages = messages.length;

  console.log("messages From Layout", messages);

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
