export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = JSON.parse(req.body);

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log("body: ", body);

  var myHeaders = new Headers();
  myHeaders.append(
    "api-key",
    "KGHPXtw7cpramJeypWykNqwwKUjr13Jwf6P0bKIuuVDCqL0zRlSkxdQRReYuAgHJ"
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    collection: "contactInfoData",
    database: "DOTRED-ERP",
    dataSource: "Amazon-FBA",
    document: body,
  });

  var requestOptions = {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://data.mongodb-api.com/app/data-nxpsr/endpoint/data/v1/action/insertOne",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      res.status(200).send("success");
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400);
    });
}

///insertOne
