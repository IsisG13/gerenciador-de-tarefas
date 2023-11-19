import React from "react";

function AddTarefa() {
    return (
        <div className="App">
            <h3>Adicione mais tarefas</h3>
            <input type="text" placeholder="nome da tarefa"/>
            <input type="text" placeholder="descricao da tarefa"/>
            <input type="text" placeholder="horario da tarefa"/>
            <input type="text" placeholder="lugar da tarefa"/>
            <button type="submit">Enviar</button>
        </div>
    )
}

export default AddTarefa