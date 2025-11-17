const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Serve HTML instead of plain text for a nicer look
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ITGateway Linux Project</title>
        <style>
          body {
            background: linear-gradient(135deg, #1e293b, #0f172a);
            color: #f8fafc;
            font-family: "Segoe UI", sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #38bdf8;
            text-shadow: 1px 1px 5px #0ea5e9;
          }
          h2 {
            font-size: 1.2rem;
            color: #cbd5e1;
            margin-bottom: 2rem;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            background: #1e40af;
            margin: 10px;
            padding: 12px 20px;
            border-radius: 12px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            font-size: 1rem;
            width: 250px;
          }
          .footer {
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <h1>ITGateway Linux Project</h1>
        <h2>DevOps Automation Pipeline</h2>
        <h3>Under the guidance of Sarfaraz sir</h3>

        <ul>
          <li>👩‍💻 John </li>
          <li>👨‍💻 Shan </li>
          <li>👩‍💻 Naeem  </li>
        </ul>

        <div class="footer">
          <p>Automation Pipeline working perfectly!<br>
          Powered by Docker, Jenkins, and Linux 🧠</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
