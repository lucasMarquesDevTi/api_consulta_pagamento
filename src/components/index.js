import api from '../services/api'

function Consulta () {

    const request = api.get()
    request.then((response) => {console.log(response)})
}

export default Consulta

