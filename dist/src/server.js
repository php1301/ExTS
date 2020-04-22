"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.default.listen(app_1.default.get("port"), () => {
    const port = app_1.default.get("port");
    console.log(`App is running on port ${port}`);
});
