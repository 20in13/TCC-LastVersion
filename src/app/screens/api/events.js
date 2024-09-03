// pages/api/events.js

export default async function handler(req, res) {
    // Simulação de dados vindos do banco de dados
    const events = [
      {
        id: "1",
        title: "Reunião de Equipe",
        start: "2024-09-05T10:00:00",
        end: "2024-09-05T11:00:00",
      },
      {
        id: "2",
        title: "Almoço com Cliente",
        start: "2024-09-03T13:00:00",
        end: "2024-09-06T14:00:00",
      },
    ];
  
    // Retorne os dados dos eventos em JSON
    res.status(200).json(events);
  }
  