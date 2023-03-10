import http from "http";
import VoiceResponse from "twilio/lib/twiml/VoiceResponse.js";

http
  .createServer(function (req, res) {
    const twiml = new VoiceResponse();
    twiml.say("Hello Boss");

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  })
  .listen(1337, "127.0.0.1");

console.log("TwiML server running at http://127.0.0.1:1337/");
