import app from "./app";
app.listen(app.get("port"), ()=>{
    const port = app.get("port");
    console.log(`App is running on port ${port}`);
});
