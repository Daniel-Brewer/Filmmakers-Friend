const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/castMembers/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/castMembers`).then(e => e.json())
  },
  post(newCastMember) {
    return fetch(`${remoteURL}/castMembers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCastMember)
    }).then(data => data.json())
  }
}