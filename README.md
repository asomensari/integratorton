# integratorton
Integration Example to Show How to Render New Relic Insights data within third-party apps

## How Does It Work?
The IntegratorTon is in essence a very simple Node.js microservice that returns data polled from New Relic Insights API. 

The UI is a simple static HTML page that uses Chartist.js as a chart engine. Using jQuery, the browser calls the Node.js service for New Relic Insights Data.

## How do I test it?
Setup is extremelly simple.

1. git clone https://github.com/asomensari/integratorton.git 

2. npm install

3. Configure the default.json file under config folder with your account information and API keys
```json 
{
  "MasterAccount": {
    "accountId": "XXXXXX",
    "restKey": "XXXXXXXX",
    "adminKey": "XXXXXXXX",
    "insightsQueryKey": "XXXXXXXX"
  }
}
```

4. npm run start

And that's it, the app listens to port 3000, so you can see the page on http://localhost:3000. The NRQL queries are currently defined on the controller file (api/controllers/integrationController.js), feel free to change the queries accordingly.
