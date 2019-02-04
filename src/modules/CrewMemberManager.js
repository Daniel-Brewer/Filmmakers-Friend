const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/crewMembers/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/crewMembers`).then(e => e.json())
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/crewMembers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCrewMember)
    }).then(data => data.json())
  }
}