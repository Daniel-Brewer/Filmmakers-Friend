const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/projects/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/projects`).then(e => e.json())
  },
  post(newProject) {
    return fetch(`${remoteURL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
    }).then(data => data.json())
  }
}