
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
  },
  edit: {
    value: (projects, id, item) => {
        console.log(item, "item")
        console.log(`${remoteURL}/${projects}/${id}`)
        return fetch(`${remoteURL}/${projects}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(result => result.json())
    }
}
}