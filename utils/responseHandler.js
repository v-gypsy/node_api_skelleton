
/*
    status: 0 = invalid request & 1 = valid request
    httpCode: http code to be sent to client (i.e 200, 404, 400, 502) etc etc..
    messgae: any custom message or else default http text will be sent
    data: reslt / data bought from db or from anywhere else.
*/
module.exports=function responsehandler(status, httpCode, message, data = null) {

    let response = {
        status: status,
        httpCode: httpCode
    }

    if (httpCode == 400)
    {
        response.statusText = "HTTP 400 Bad Request";
        response.message = message || "Invalid request, missing required headers.";
    }
    else if (httpCode == 401)
    {
        response.statusText = "HTTP 401 Unauthorized";
        response.message = message ||  "Invalid request, access token is invalid.";
    }
    else if (httpCode == 403)
    {
        response.statusText = "HTTP 403 Forbidden";
        response.message = message || "Invalid request, missing authorization headers.";
    }
    else if (httpCode == 412)
    {
        response.statusText = "HTTP 412 PreconditionFailed";
        response.message = message || "Precondition Failed";
    }
    else if (httpCode == 415)
    {
        response.statusText = "HTTP 415 Unsupported entity";
        response.message = message || "Invalid request, json is not valid";
    }
    else if (httpCode == 422)
    {
        response.statusText = "HTTP 422 Unprocessable entity";
        response.message = message || "Invalid request, missing required parameters.";
    }
    else if (httpCode == 200)
    {
        response.statusText = "HTTP 200 OK success";
        response.message = message || "Result found."
        response.data = data || null
    }
    else if (httpCode == 201)
    {
        response.statusText = "Created successfully";
        response.message = message || "Created successfully."
    }
    else if (httpCode == 204)
    {
        response.statusText = "HTTP 204 No Content";
        response.message = message || "No content found."
    }
    else if (httpCode == 500)
    {
        response.statusText = "HTTP 500 Internal Server Error";
        response.message = "There was some error in processing your request.";
    }
    else if (httpCode == 406)
    {
        response.statusText = "HTTP 406 Content Not Acceptable";
        response.message = message || "Content Not Acceptable"
    }
    else if (httpCode == 404)
    {
        response.statusText = "HTTP 404 No Resource Found";
        response.message = message || "No Resource Found"
    }
    else
    {
        response.statusText = "Invalid Status Code";
        response.message = "The status code rejected by the server.";
    }

    return response;
};