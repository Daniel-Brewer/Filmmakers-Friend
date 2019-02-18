import React, { Component } from 'react';
import './Filmmaker.css';
import { Route, Redirect } from "react-router-dom";
import ProjectList from "./project/ProjectList";
import ProjectDetail from "./project/ProjectDetail";
import ProjectForm from "./project/ProjectForm";
import ProjectEditForm from "./project/ProjectEditForm";
import ProjectManager from "../modules/ProjectManager";
import CastMemberList from "./castMember/CastMemberList";
import CastMemberForm from "./castMember/CastMemberForm";
import CastMemberEditForm from "./castMember/CastMemberEditForm";
import CastMemberManager from "../modules/CastMemberManager";
import UserManager from "../modules/UserManager";
import CrewMemberList from "./crewMember/CrewMemberList";
import CrewMemberForm from "./crewMember/CrewMemberForm";
import CrewMemberEditForm from "./crewMember/CrewMemberEditForm";
import CrewMemberManager from "../modules/CrewMemberManager";
import LocationList from "./location/LocationList";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import LocationManager from "../modules/LocationManager";
import LoginForm from "./authentication/LoginForm";
import RegistrationForm from "./authentication/RegistrationForm";

class ApplicationViews
  extends Component {
  // set initial state
  state = {
    users: [],
    projects: [],
    castMembers: [],
    crewMembers: [],
    locations:[],
    activeUser: [],
  };

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  addUser = user =>
    UserManager.post(user)
      .then(() => UserManager.getAll())
      .then(users =>
        this.setState({
          users: users
        })
      );
  addProject = project =>
    ProjectManager.post(project)
      .then(() => ProjectManager.getAll())
      .then(projects =>
        this.setState({
          projects: projects
        })
      );

  deleteProject = id => {
    return fetch(`http://localhost:5002/projects/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => ProjectManager.getAll(this.state.activeUser))
      .then(projects =>
        this.setState({
          projects: projects
        })

      );
  };


  editProject = (projectId, existingProject) =>
    ProjectManager.put(projectId, existingProject)
      .then(() => ProjectManager.getAll())
      .then(projects => this.setState({
        projects: projects
      })
      )


  addCastMember = castMember =>
    CastMemberManager.post(castMember)
      .then(() => CastMemberManager.getAll())
      .then(castMembers =>
        this.setState({
          castMembers: castMembers
        })
      );
// deletes specific castMember from database
  deleteCastMember = (id, projectId) => {
    return fetch(`http://localhost:5002/castMembers/${id}`, {
      method: "DELETE"
    })

      .then(response => response.json())
      .then(() => CastMemberManager.getCastMembersInProject(projectId))
      .then(castMembers => this.setState({
        castMembers: castMembers
      })
      )

  }

  editCastMember = (castMemberId, existingCastMember) =>
    CastMemberManager.put(castMemberId, existingCastMember)
      .then(() => CastMemberManager.getAll())
      .then(castMembers => this.setState({
        castMembers: castMembers
      })
      )

  editCrewMember = (crewMemberId, existingCrewMember) =>
    CrewMemberManager.put(crewMemberId, existingCrewMember)
      .then(() => CrewMemberManager.getAll())
      .then(crewMembers => this.setState({
        crewMembers: crewMembers
      })
      )

  addCrewMember = crewMember =>
    CrewMemberManager.post(crewMember)
      .then(() => CrewMemberManager.getAll())
      .then(crewMembers =>
        this.setState({
          crewMembers: crewMembers
        })
      );

  deleteCrewMember = (id, projectId) => {
    return fetch(`http://localhost:5002/crewMembers/${id}`, {
      method: "DELETE"
    })

      .then(response => response.json())
      .then(() => CrewMemberManager.getCrewMembersInProject(projectId))
      .then(crewMembers => this.setState({
        crewMembers: crewMembers
      })
      )
    }
  editLocation = (locationId, existingLocation) =>
    LocationManager.put(locationId, existingLocation)
      .then(() => LocationManager.getAll())
      .then(locations => this.setState({
        locations: locations
      })
      )

  addLocation = location =>
    LocationManager.post(location)
      .then(() => LocationManager.getAll())
      .then(locations =>
        this.setState({
          locations: locations
        })
      );

  deleteLocation = (id, projectId) => {
    return fetch(`http://localhost:5002/locations/${id}`, {
      method: "DELETE"
    })

      .then(response => response.json())
      .then(() => LocationManager.getLocationsInProject(projectId))
      .then(locations => this.setState({
        locations: locations
      })
      )

  }

  componentDidMount() {
    const newState = {}
    let localUser = JSON.parse(sessionStorage.getItem("credentials"));
    newState.activeUser = localUser;


    ProjectManager.getAll().then(allProjects => {
      this.setState({
        projects: allProjects
      });
    })

  }
// functions to refresh Project List after login
  updateComponent = () => {
    ProjectManager.getAll().then(allProjects => {
      this.setState({
        projects: allProjects
      });
    });

  }

  // Refresh list after delete
  updateCastComponent = (id) => {
    CastMemberManager.getCastMembersInProject(id).then(allCastMembers => {
      this.setState({
        castMembers: allCastMembers
      });
    });

  }
  // Refresh list after delete
  updateCrewComponent = (id) => {
    CrewMemberManager.getCrewMembersInProject(id).then(allCrewMembers => {
      this.setState({
        crewMembers: allCrewMembers
      });
    });

  }
  updateLocationComponent = (id) => {
    LocationManager.getLocationsInProject(id).then(allLocations => {
      this.setState({
        locations: allLocations
      });
    });

  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <LoginForm {...props}
            activeUser={this.state.activeUser}
            updateComponent={this.updateComponent} />
        }}
        />
        <Route exact path="/register" render={(props) => {
          return <RegistrationForm {...props}
            addUser={this.addUser}
            users={this.state.users} />
        }} />

        {/* this is the list of projects */}
        <Route
          exact
          path="/projects"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ProjectList
                  {...props}
                  updateComponent={this.state.updateComponent}
                  activeUser={this.state.activeUser}
                  addProject={this.addProject}
                  editProject={this.editProject}
                  deleteProject={this.deleteProject}
                  projects={this.state.projects}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        {/* this is the detail for individual project */}
        <Route
          path="/projects/:projectId(\d+)"
          render={props => {
            return (
              <ProjectDetail
                {...props}
                getCastMembersInProject={this.getCastMembersInProject}
                getCrewMembersInProject={this.getCrewMembersInProject}
                getLocationsInProject={this.getLocationsInProject}
                deleteProject={this.deleteProject}
                editProject={this.editProject}
                projects={this.state.projects}
                castMembers={this.state.castMembers}
                crewMembers={this.state.crewMembers}
                locations={this.state.locations}
              />
            );
          }}
        />
        {/* this is the project add form */}
        <Route
          path="/projects/new"
          render={props => {
            return (
              <ProjectForm
                {...props}
                activeUser={this.state.activeUser}
                projects={this.state.projects}
                addProject={this.addProject}
                title={this.state.title}
                description={this.state.description} />
            );
          }}
        />
        {/* This is the form presented to Edit */}
        <Route path="/projects/edit/:projectId(\d+)/" render={(props) => {
          return <ProjectEditForm
            {...props}
            projects={this.state.projects}
            title={this.state.title}
            description={this.state.description}
            editProject={this.editProject} />
        }} />

        {/* This is the list to be displayed when CastMembers button is clicked in Project Details */}
        <Route
          path="/castMembers/:projectId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <CastMemberList {...props}
                  updateCastComponent={this.updateCastComponent}
                  getCastMembersInProject={this.getCastMembersInProject}
                  editCastMember={this.editCastMember}
                  deleteCastMember={this.deleteCastMember}
                  castMembers={this.state.castMembers}
                  projects={this.state.projects}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        {/* this is the castMember add form */}
        <Route
          path="/castMembers/new/:projectId(\d+)"
          render={props => {
            return (
              <CastMemberForm
                {...props}
                addCastMember={this.addCastMember}
                name={this.state.name}
                character={this.state.character}
                phone={this.state.phone}
                email={this.state.email}
                projects={this.state.projects}
              />
            );
          }}
        />
        {/* This the Edit form for CastMembers */}
        <Route path="/castMembers/edit/:castMemberId(\d+)/" render={(props) => {
          return <CastMemberEditForm
            {...props}
            castMembers={this.state.castMembers}
            name={this.state.name}
            character={this.state.character}
            phone={this.state.phone}
            email={this.state.email}
            editCastMember={this.editCastMember} />
        }} />
        {/* This is the list to be dispalyed when CrewMembers button is clicked in Project Detail */}
        <Route
          path="/crewMembers/:projectId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <CrewMemberList {...props}
                  updateCrewComponent={this.updateCrewComponent}
                  getCrewMembersInProject={this.getCrewMembersInProject}
                  editCrewMember={this.editCrewMember}
                  deleteCrewMember={this.deleteCrewMember}
                  crewMembers={this.state.crewMembers}
                  projects={this.state.projects}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route path="/crewMembers/new/:projectId(\d+)" render={(props) => {
          return <CrewMemberForm {...props}
            addCrewMember={this.addCrewMember}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            projects={this.state.projects}
          />
        }} />
        <Route path="/crewMembers/edit/:crewMemberId(\d+)/" render={(props) => {
          return <CrewMemberEditForm
            {...props}
            crewMembers={this.state.crewMembers}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            editCrewMember={this.editCrewMember} />
        }} />
        {/* This is the list to be dispalyed when Locations button is clicked in Project Detail */}
        <Route
          path="/locations/:projectId(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <LocationList {...props}
                  updateLocationComponent={this.updateLocationComponent}
                  getLocationsInProject={this.getLocationsInProject}
                  editLocation={this.editLocation}
                  deleteLocation={this.deleteLocation}
                  locations={this.state.locations}
                  projects={this.state.projects}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route path="/locations/new/:projectId(\d+)" render={(props) => {
          return <LocationForm {...props}
            addLocation={this.addLocation}
            name={this.state.name}
            address={this.state.address}
            projects={this.state.projects}
          />
        }} />
        <Route path="/locations/edit/:locationId(\d+)/" render={(props) => {
          return <LocationEditForm
            {...props}
            locations={this.state.locations}
            name={this.state.name}
            address={this.state.address}
            editLocation={this.editLocation} />
        }} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews
