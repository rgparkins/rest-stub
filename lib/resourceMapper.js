let fs = require('fs');
let path = require('path');

let staticPath = path.join(process.env.FILE_LOCATION?process.env.FILE_LOCATION:`${__dirname}/../files`)

getStaticLocation = () => {
    return staticPath;
}

getContent = (requestedPath, mimetype) => {
    let fullPath = path.join(staticPath, mimetype, requestedPath) + "." + mimetype.split('/')[1];

    if (fs.existsSync(fullPath)) {
        return fullPath;
    } else {
        return null;
    }
}

handleRequest = (req, res) => {
    let contentType = req.headers["content-type"] || "application/json";

    let filePath = getContent(req.originalUrl, contentType);

    if (filePath) {
        res.set("content-type", contentType)
            .sendfile(filePath);
    } else {
        res.status(404)
            .send("Not found")
    }
}

module.exports = {
    handleRequest,
    getStaticLocation
};