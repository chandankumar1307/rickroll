// create  a normal express server using import instead of express
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import twilio from "twilio";
// create a new express app and save it as "app"

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// server configuration
const PORT = 3001;

// create a route for the app
app.post("/api", (req, res) => {
  console.log(req.body);

  client.calls
    .create({
      // make sure to use the correct TwiML instructions
      twiml: `<Response><Say>Hi ${req.body.name}! You have been Rickrolled!</Say><Play>https://demo.twilio.com/docs/classic.mp3</Play></Response>`,
      to: req.body.number,
      from: "+18303965975",
    })
    .then((call) => console.log(call.sid))
    .catch((err) => console.log(err));
  res.status(200).json({ message: "Hello from server!", data: req.body });
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
