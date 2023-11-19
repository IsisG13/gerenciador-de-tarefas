import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./api";

function Home() {
  const [tarefas, setTarefas] = useState([]);

  const gerenciadorTarefas = async () => {
    try {
      const response = await api.get("/tarefas/");
      setTarefas(response.data);
    } catch (error) {
      console.error("Erro ao achar tarefas: ", error);
    }
  };

  useEffect(() => {
    gerenciadorTarefas();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Gerenciador - tarefass</h3>

        <table border="black" width="100%">
          <tr>
            <th>
              <a href="/addTarefa">Adicionar tarefa</a>
            </th>
          </tr>
        </table>
        <table border="black" width="100%">
          <tr>
            <th>Nome da tarefa</th>
            <th>Descrição da tarefa</th>
            <th>Horario da tarefa</th>
            <th>Lugar da tarefa</th>
          </tr>
          <tr>
            <td>
              {tarefas.map((tarefas) => (
                <div key={tarefas.id}>
                  <p className="tarefas">{tarefas?.nome_da_tarefa}</p>
                  <br />
                </div>
              ))}
            </td>

            <td>
              {tarefas.map((tarefas) => (
                <div key={tarefas.id}>
                  <p className="tarefas">{tarefas?.descricao_da_tarefa}</p>
                  <br />
                </div>
              ))}
            </td>

            <td>
              {tarefas.map((tarefas) => (
                <div key={tarefas.id}>
                  <p className="tarefas">{tarefas?.horario_da_tarefa}</p>
                  <br />
                </div>
              ))}
            </td>

            <td>
              {tarefas.map((tarefas) => (
                <div key={tarefas.id}>
                  <p className="tarefas">{tarefas?.lugar_da_tarefa}</p>
                  <br />
                </div>
              ))}
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default Home;
