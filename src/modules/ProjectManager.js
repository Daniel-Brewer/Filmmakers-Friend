
const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/projects/${id}`).then(p => p.json())
  },
  getAll() {
    let sessionUser=sessionStorage.getItem("credentials")
    let sessionUserNumber= Number(sessionUser)
    return fetch(`${remoteURL}/projects/?userId=${sessionUserNumber}`).then(p => p.json())
  },
  post(newProject) {
    return fetch(`${remoteURL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
    }).then(data => data.json())
  },

  put(projectId, existingProject) {
    return fetch(`${remoteURL}/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingProject)
    }).then(p => p.json())
  }
}