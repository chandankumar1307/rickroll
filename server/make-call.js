import twilio from "twilio";

const accountSid = "AC1b13c252407d7feae79fe87075972fb8";
const authToken = "3f1c9a0208ca34ab20750efaf58b7c25";

const client = twilio(accountSid, authToken);

// Make the call to the user, using the TwiML instructions and play rickroll
client.calls
  .create({
    // make sure to use the correct TwiML instructions
    twiml:
      "<Response><Say>Hi there! You have been Rickrolled!</Say><Play>https://demo.twilio.com/docs/classic.mp3</Play></Response>",
    to: "+918368858321",
    from: "+18303965975",
  })
  .then((call) => console.log(call.sid));
