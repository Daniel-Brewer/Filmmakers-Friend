const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/crewMembers/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/crewMembers`).then(e => e.json())
  },
  post(newCrewMember) {
    return fetch(`${remoteURL}/crewMembers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCrewMember)
    }).then(data => data.json())
  },
  put(crewMemberId, existingCrewMember) {
    return fetch(`${remoteURL}/crewMembers/${crewMemberId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingCrewMember)
    }).then(p => p.json())
  },
  getCrewMembersInProject(projectId) {
    return fetch(`${remoteURL}/crewMembers?_expand=project&projectId=${projectId}
    `).then(e => e.json())
  }
}