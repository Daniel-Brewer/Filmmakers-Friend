import React, { Component } from 'react';
import './Filmmaker.css';
import { Route, Redirect } from "react-router-dom";
import ProjectList from "./project/ProjectList";
import ProjectDetail from "./project/ProjectDetail";
import ProjectForm from "./project/ProjectForm";
import ProjectManager from "../modules/ProjectManager";
import CastMemberList from "./castMember/CastMemberList";
import CastMemberDetail from "./castMember/CastMemberDetail";
import CastMemberForm from "./castMember/CastMemberForm";
import CastMemberManager from "../modules/CastMemberManager";
import CrewMemberList from "./crewMember/CrewMemberList";
import CrewMemberDetail from "./crewMember/CrewMemberDetail";
import CrewMemberForm from "./crewMember/CrewMemberForm";
import CrewMemberManager from "../modules/CrewMemberManager";
import UserManager from "../modules/UserManager";
import LoginForm from "./authentication/LoginForm";
import RegistrationForm from "./authentication/RegistrationForm";

class ApplicationViews
  extends Component {
  state = {
    users: [],
    projects: [],
    castMembers: [],
    crewMembers: [],
    activeUser: [],
  };

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  addUser = user => UserManager.post(user)
    .then(() => UserManager.getAll())
    .then(users => this.setState({
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
      .then(() => fetch(`http://localhost:5002/projects`))
      .then(response => response.json())
      .then(projects =>
        this.setState({
          projects: projects
        })
      );
  };

  editProject = (id, projects) => ProjectManager.edit("projects", id, projects)
    .then(() => ProjectManager.getAll("projects", this.state.activeUser.id))
    .then(projects => this.setState({
      projects: projects
    }))


  addCastMember = castMember =>
    CastMemberManager.post(castMember)
      .then(() => CastMemberManager.getAll())
      .then(castMembers =>
        this.setState({
          castMembers: castMembers
        })
      );

  deleteCastMember = id => {
    return fetch(`http://localhost:5002/castMembers/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/castMembers`))
      .then(response => response.json())
      .then(castMembers => this.setState({
        castMembers: castMembers
      })
      )
  }


  addCrewMember = crewMember =>
    CrewMemberManager.post(crewMember)
      .then(() => CrewMemberManager.getAll())
      .then(crewMembers =>
        this.setState({
          crewMembers: crewMembers
        })
      );
  deleteCrewMember = id => {
    return fetch(`http://localhost:5002/crewMembers/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/crewMembers`))
      .then(response => response.json())
      .then(crewMembers => this.setState({
        crewMembers: crewMembers
      })
      );
  }

  componentDidMount() {
    // Example code. Make this fit into how you have written yours.
    const newState = {}
    let localUser = JSON.parse(sessionStorage.getItem("credentials"));
    newState.activeUser = localUser;
    UserManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })

    // sessionStorage.setItem("userId",2)
    ProjectManager.getAll().then(allProjects => {
      this.setState({
        projects: allProjects
      });
    });

    CastMemberManager.getAll().then(allCastMembers => {
      this.setState({
        castMembers: allCastMembers
      });
    });

    CrewMemberManager.getAll().then(allCrewMembers => {
      this.setState({
        crewMembers: allCrewMembers
      });
    });

  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LoginForm} />
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
                  activeUser={this.state.activeUser}
                  addProject={this.addProject}
                  deleteProject={this.deleteProject}
                  projects={this.state.projects}
                />
              );
            } else {
              return <Redirect to="/login" />;
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
                deleteProject={this.deleteProject}
                editProject={this.editProject}
                projects={this.state.projects}
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
                addProject={this.addProject}
                title={this.state.title}
                description={this.state.description} />
            );
          }}
        />
        <Route
          exact
          path="/castMembers"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <CastMemberList {...props}
                  deleteCastMember={this.deleteCastMember}
                  castMembers={this.state.castMembers}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* this is the detail for individual castMember */}
        <Route
          path="/castMembers/:castMemberId(\d+)"
          render={props => {
            return (
              <CastMemberDetail
                {...props}
                deleteCastMember={this.deleteCastMember}
                castMembers={this.state.castMembers}
              />
            );
          }}
        />
        {/* this is the castMember add form */}
        <Route
          path="/castMembers/new"
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
        <Route
          exact
          path="/crewMembers"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <CrewMemberList {...props}
                  deleteCrewMember={this.deleteCrewMember}
                  crewMembers={this.state.crewMembers}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route path="/crewMembers/:crewMemberId(\d+)" render={(props) => {
          return <CrewMemberDetail {...props} deleteCrewMember={this.deleteCrewMember} crewMembers={this.state.crewMembers} />
        }} />
        <Route path="/crewMembers/new" render={(props) => {
          return <CrewMemberForm {...props}
            addCrewMember={this.addCrewMember}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            projects={this.state.projects}
          />
        }} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews
