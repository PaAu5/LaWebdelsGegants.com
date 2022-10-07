import {getTask} from './firebase.js'

window.addEventListener('DOMContentLoaded', async () =>{
    const querySnapshot = await getTask()

    let html = ''

    querySnapshot.forEach(doc => {
        const Gegants = doc.data()
        if (Gegants.Constructor == "El ingenio")
        html += `
        <div>
            <h3>${Gegants.Nom}</h3>
            <p>Lloc: ${Gegants.Lloc}</p>
            <p>Pes: ${Gegants.Pes} Kg</p>
            <p>Any de construcció: ${Gegants.Any}</p>
            <p>Contructor: ${Gegants.Constructor}</p>
            <img src="${Gegants.Foto}" alt="Error" id="foto_gegants" width="15%" height="15%">
       </div>
       `
    })

    document.getElementById('list').innerHTML = html;
})