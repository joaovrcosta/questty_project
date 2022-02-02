import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";
import { QuestsProvider } from "./QuestsContexts";

// import './services/firebase'

createServer({
  models: {
    quest: Model,
  },

  seeds(server) {
    server.db.loadData({
      quests: [
        {
          id: 1,
          title: "Eae galera, beleza?",
          text: "Como vocês estão? Viram as ultimas noticias?",
          category: "Noticias",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Oi pessoal, alguem para conversar?",
          text: "Bora criar um grupo pessoal",
          category: "Bate Papo",
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/perguntas", () => {
      return this.schema.all("quest");
    });
    this.post("/perguntas", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("quest", data);
    });
  },
});

ReactDOM.render(
  <QuestsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuestsProvider>,

  document.getElementById("root")
);
