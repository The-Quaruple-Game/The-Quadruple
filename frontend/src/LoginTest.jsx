import React, { useState } from 'react';

const LoginTest = () => {
    const [response, setResponse] = useState(null);

    const handleLogin = () => {
        fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "Shuklaji",
                password: "Shuklaji",
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Login response:", data);
                setResponse(data);
            })
            .catch(err => {
                console.error("Login error:", err);
                setResponse({ error: "Something went wrong!" });
            });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Login Test</h2>
            <button onClick={handleLogin}>Login</button>
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
        </div>
    );
};

export default LoginTest;
