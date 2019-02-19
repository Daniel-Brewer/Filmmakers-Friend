const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/filmLocations/${id}`).then(e => e.json())
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/filmLocations?_expand=project&projectId=${projectId}`).then(e => e.json())
  },
  post(newFilmLocation) {
    return fetch(`${remoteURL}/filmLocations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFilmLocation)
    }).then(data => data.json())
  },
  put(filmLocationId, existingFilmLocation) {
    return fetch(`${remoteURL}/filmLocations/${filmLocationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingFilmLocation)
    }).then(p => p.json())
  },
  getFilmLocationsInProject(projectId) {
    return fetch(`${remoteURL}/filmLocations?_expand=project&projectId=${projectId}
    `).then(e => e.json())
  }
}