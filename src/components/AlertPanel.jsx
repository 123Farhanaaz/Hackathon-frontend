const AlertPanel = () => {

    const alerts = [
        "📈 TCS breakout detected",
        "⚠️ INFY risk signal"
    ];

    return (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc" }}>
            <h3>🚨 Market Alerts</h3>

            {alerts.map((alert, index) => (
                <div key={index} style={{ marginBottom: "8px" }}>
                    {alert}
                </div>
            ))}
        </div>
    );
};

export default AlertPanel;