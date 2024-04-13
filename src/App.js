import ActiveChatters from "./components/activeChatters";
import ChatBox from "./components/chatbox";
import ChatRooms from "./components/chatrooms";
import Terminal from "./components/terminal";
import { useActiveChatroom } from "./context/activeChatroomContext";



function App() {
  const { activeChatroom } = useActiveChatroom();
  return (
    <div className="App bg-primary text-white p-2 h-screen w-screen flex justify-center gap-2 items-center">
      <ChatRooms />
      {!activeChatroom && (<div className="font-bold text-3xl">Select a chatroom from the panel</div>)}
      {activeChatroom && (<ActiveChatters />)}
      {activeChatroom && <ChatBox />}
      {activeChatroom && <Terminal/>}


    </div>
  );
}

export default App;
