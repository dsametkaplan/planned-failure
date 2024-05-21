# Power Outage Notification Project

This project is an application that utilizes the [Twilio API](https://www.twilio.com/) to retrieve planned power outages, filter them by a specific region, and send SMS notifications for the filtered outages.

## Requirements

- Node.js
- NPM (Node Package Manager)
- A Twilio account
- A Twilio phone number

## Installation

1. Clone or download the project:

    ```bash
    git clone https://github.com/dsametkaplan/planned-failure.git
    ```

2. Navigate to the project directory:

    ```bash
    cd planned-failure
    ```

3. Install the required packages:

    ```bash
    npm install
    ```

4. Create a `.env` file and fill in the following variables:

    ```
    ACCOUNTSID=your-twilio-account-sid
    AUTH_TOKEN=your-twilio-auth-token
    PORT=5000
    ```

    Note: You can obtain the `ACCOUNTSID` and `AUTH_TOKEN` values from your [Twilio console](https://www.twilio.com/console).

## Usage

1. To start the application, run the following command:

    ```bash
    npm start
    ```

2. Once the server is started, planned outages will be checked at regular intervals, and SMS notifications will be sent for the outages belonging to the specified region.

## Notes

- The project requires internet access and access to your Twilio account to function properly.
- Make sure to check the pricing information and billing details of the services you use from your Twilio account.
