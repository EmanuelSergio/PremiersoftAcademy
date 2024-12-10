import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      Timer.init();
      // await Notifyer.init();
      // Notifyer.notify({
      //   title: "Hora do Post",
      //   body: "Crie alguma coisa agora",
      // });
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
