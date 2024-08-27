const next = require("next");
const app = require("./app");
const dev = process.env.NODE_ENV !== "production";
const nextJSApp = next({ dev });
const handle = nextJSApp.getRequestHandler();

nextJSApp
  .prepare()
  .then(() => {
    app.get("*", handle);
    app.set("port", process.env.PORT || 8080);
    const server = app.listen(app.get("port"), () => {
      console.log(
        `Express API running on PORT  ###### ${server.address().port}`
      );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
