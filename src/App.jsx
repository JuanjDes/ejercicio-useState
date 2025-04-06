import { useState } from "react"
import './App.css'

// Función App() sólo con 3 botones para cambiar el nombre
/* function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');
  
    return (
        <div>
            <h2>Teacher name: {name}</h2>
            <hr></hr>
            <button onClick={() => setName('Data')}>Data</button>
            <button onClick={() => setName('Reyes')}>Reyes</button>
            <button onClick={() => setName('Yolanda')}>Yolanda</button>
        </div>
    )
} */

// Función App() con formulario para cambiar el nombre
function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        if (newName.trim()) {   // Verifica que no esté vacío
          setName(newName);
          setNewName('');       // Limpia el input después de enviar
        }
      };
  
    return (
        <div>
            <h2>Teacher name: {name}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new teacher name"/>
                <button type="submit">Change Name</button>
            </form>
        </div>
    )
}

export default App
