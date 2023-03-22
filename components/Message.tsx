import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isGhost = message.user.name === "Ghost";

  return (
    <div className={`message-wrapper ${isGhost && 'ghost'}`}>
      <div className="message-container">
        <img src={message.user.avatar} alt="" className="message-image" />
        <p className="message-text">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
