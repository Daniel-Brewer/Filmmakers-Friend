const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/sceneProps/${id}`).then(e => e.json())
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/sceneProps?_expand=project&projectId=${projectId}`).then(e => e.json())
  },
  post(newSceneProp) {
    return fetch(`${remoteURL}/sceneProps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSceneProp)
    }).then(data => data.json())
  },
  put(scenePropId, existingSceneProp) {
    return fetch(`${remoteURL}/sceneProps/${scenePropId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingSceneProp)
    }).then(p => p.json())
  },
  getScenePropsInProject(projectId) {
    return fetch(`${remoteURL}/sceneProps?_expand=project&projectId=${projectId}
    `).then(e => e.json())
  }
}