const express = require("express");
const app = express();
const axios = require("axios");
const twilio = require("twilio");
const cron = require("node-cron");
require("dotenv").config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const fetchData = async () => {
  try {
    const response = await axios.get("https://www.bedas.com.tr/elektrik-getir");
    const data = response.data;
    const filteredData = data.filter(
      (item) => item.plannedOutage.county === "BAĞCILAR"
    );
    const messages1 = filteredData.map((item) => item.plannedOutage.message);
    console.log("Filtered Messages:", messages1);
    for (const messageText of messages1) {
      const message = await client.messages.create({
        body: messageText,
        from: "+xxxxxxxxxx",
        to: "+905xxxxxxxxx",
      });
      console.log(message);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

cron.schedule("* * * * *", fetchData);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port" + " " + process.env.PORT || 5000)
);
