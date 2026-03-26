import ChatBox from "../components/ChatBox";
import AlertPanel from "../components/AlertPanel";

const Dashboard = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>📊 ET Smart Investor AI</h1>

            <ChatBox />
            <AlertPanel />
        </div>
    );
};

export default Dashboard;