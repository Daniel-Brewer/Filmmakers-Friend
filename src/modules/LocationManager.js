const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
    }).then(data => data.json())
  },
  put(locationId, existingLocation) {
    return fetch(`${remoteURL}/locations/${locationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingLocation)
    }).then(p => p.json())
  },
  getLocationsInProject(projectId) {
    return fetch(`${remoteURL}/locations?_expand=project&projectId=${projectId}
    `).then(e => e.json())
  }
}