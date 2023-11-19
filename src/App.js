import "./App.css";
import { useEffect, useState } from "react";
import api from "./api";
import axios from "axios";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novoNome, setNome] = useState("");
  const [novaDescricao, setDescricao] = useState("");
  const [novoHorario, setHorario] = useState("");
  const [novoLugar, setLugar] = useState("");

  const criarTarefa = async () => {
    await axios.post("http://127.0.0.1:8000/api/tarefas/", {
      nome_da_tarefa: novoNome,
      descricao_da_tarefa: novaDescricao,
      horario_da_tarefa: novoHorario,
      lugar_da_tarefa: novoLugar,
    });

    window.location.href = "/";
  };

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
        <h3>Gerenciador de tarefas</h3>

        <table border="black" width="100%">
          <tr>
            <td>
              <a href="/AddTarefa">Adicionar tarefa</a>
            </td>
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

        <br />
        <div className="adicionarTarefas">
          <h3>Adicione mais tarefas</h3>
          <input type="text" placeholder="nome da tarefa" onChange={(e) => setNome(e.target.value)} /> <br />
          <input type="text" placeholder="descricao da tarefa" onChange={(e) => setDescricao(e.target.value)}/> <br />
          <input type="text" placeholder="horario da tarefa" onChange={(e) => setHorario(e.target.value)} /> <br />
          <input type="text" placeholder="lugar da tarefa" onChange={(e) => setLugar(e.target.value)} /> <br />
          <button onClick={criarTarefa} type="submit">Enviar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
