export const Message = ({ message }) => {
  return (
    <div>
      <p>{message.content}</p>
      <p>{message.senderName}</p>
    </div>
  );
}
