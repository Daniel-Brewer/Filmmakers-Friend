import React, { Component } from 'react';
import './Filmmaker.css';
import { Route, Redirect } from "react-router-dom";
import ProjectList from "./project/ProjectList";
import ProjectDetail from "./project/ProjectDetail";
import ProjectForm from "./project/ProjectForm";
import ProjectEditForm from "./project/ProjectEditForm";
import ProjectManager from "../modules/ProjectManager";
import CastMemberList from "./castMember/CastMemberList";
import CastMemberDetail from "./castMember/CastMemberDetail";
import CastMemberForm from "./castMember/CastMemberForm";
import CastMemberEditForm from "./castMember/CastMemberEditForm";
import CastMemberManager from "../modules/CastMemberManager";
import CrewMemberList from "./crewMember/CrewMemberList";
import CrewMemberDetail from "./crewMember/CrewMemberDetail";
import CrewMemberForm from "./crewMember/CrewMemberForm";
import CrewMemberEditForm from "./crewMember/CrewMemberEditForm";
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
    const newState = {}
    let localUser = JSON.parse(sessionStorage.getItem("credentials"));
    newState.activeUser = localUser;
    UserManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })


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

  updateComponent = () => {
    ProjectManager.getAll().then(allProjects => {
      this.setState({
        projects: allProjects
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
                projects={this.state.projects}
                addProject={this.addProject}
                title={this.state.title}
                description={this.state.description} />
            );
          }}
        />
        <Route path="/projects/edit/:projectId(\d+)/" render={(props) => {
          return <ProjectEditForm
            {...props}
            projects={this.state.projects}
            title={this.state.title}
            description={this.state.description}
            editProject={this.editProject} />
        }} />
        <Route
          exact
          path="/castMembers"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <CastMemberList {...props}
                  editCastMember={this.editCastMember}
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
      </React.Fragment>
    );
  }
}

export default ApplicationViews
