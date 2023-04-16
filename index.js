const twilio = require("twilio");

const accountSid = "ACbfbb4c856c4fae8a6d69a9a999565f7a";
const authToken = "123197461aa35c913665dd803a4a53c2";
(async () => {
  try {
    const client = new twilio(accountSid, authToken);

    const message = await client.messages.create({
      from: "+16204104643",
      to: "+959781716565",
      body: "Twilio SMS Service",
    });
    console.log("send", message);
  } catch (error) {
    console.log(error);
  }
})();

//SK66cd5273654b92ebd3ca35daa2d200a6

//678h0ZW4fDklMSv81kNXj8dhi2welRBr

//678h0ZW4fDklMSv81kNXj8dhi2welRBr
