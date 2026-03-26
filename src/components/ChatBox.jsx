import { useState } from "react";
import { analyzeStock } from "../services/api";

const ChatBox = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (!input) return;

        const newMessages = [...messages, { type: "user", text: input }];
        setMessages(newMessages);

        try {
            const response = await analyzeStock(input);

            setMessages([
                ...newMessages,
                { type: "bot", text: response }
            ]);
        } catch (error) {
            setMessages([
                ...newMessages,
                { type: "bot", text: "Error fetching data" }
            ]);
        }

        setInput("");
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h2>💬 AI Investor Chat</h2>

            <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{
                        textAlign: msg.type === "user" ? "right" : "left",
                        marginBottom: "8px"
                    }}>
                        <span style={{
                            background: msg.type === "user" ? "#007bff" : "#eee",
                            color: msg.type === "user" ? "white" : "black",
                            padding: "8px",
                            borderRadius: "8px",
                            display: "inline-block"
                        }}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>

            <input
                type="text"
                placeholder="Enter stock (e.g., TCS)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: "70%", padding: "8px" }}
            />

            <button onClick={handleSend} style={{ padding: "8px", marginLeft: "10px" }}>
                Send
            </button>
        </div>
    );
};

export default ChatBox;