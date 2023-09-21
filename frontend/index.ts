import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun featMain1");
    return new Response("title Name \n" + body);
  },
  port: 3000,
});
