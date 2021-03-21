exports.handler = async (event) => {
    const responseCode = 200;
    const responseBody = [
      { officeNumber: 1, officeName: "NEW YORK", pendingBusiness: "1000.00" },
      { officeNumber: 2, officeName: "OHIO", pendingBusiness: "2000.00" },
      { officeNumber: 3, officeName: "DES MOINES", pendingBusiness: "300000.00" },
      { officeNumber: 4, officeName: "CALIFORNIA", pendingBusiness: "400000.00" },
      { officeNumber: 5, officeName: "WASHINGTON", pendingBusiness: "5000000.00" },
    ];
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };
    const response = {
      statusCode: responseCode,
      headers: headers,
      body: JSON.stringify(responseBody),
    };
    return response;
  };