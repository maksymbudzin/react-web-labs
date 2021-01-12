import React from "react";
const Success = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "3rem",
                }}
            >

                <h1 style={{ color: "white" }}>Thank you!</h1>
                <h1 style={{ color: "white", marginTop: "1.25rem", fontSize: "100%" }}>
                    You have successfully bough gemstone :)
                    Wait for the message
                </h1>
            </div>
        </div>
    );
};

export default Success;
