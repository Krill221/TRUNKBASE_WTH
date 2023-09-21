import figlet from "figlet";

Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun featMain1 Bun dev dev dev!!!");
    return new Response("title Name \n" + body);
  },
  port: 3000,
});
