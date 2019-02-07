// This component will have the list to be displayed to the user
// import React, { Component } from "react"
// import "./CastMember.css"
// import CastMemberCard from "./CastMemberCard"

// export default class CastMemberList extends Component {
//     render () {
//         return (
//             <React.Fragment>
//                 <div className="castMemberButton">
//                     <button type="button"
//                             onClick={()=> this.props.history.push("/castMembers/new")}
//                             className="btn btn-success">
//                         Add CastMember
//                     </button>
//                 </div>
//                 <section className="castMembers">
//                 {
//                     this.props.castMembers.map(castMember =>
//                         <CastMemberCard key={castMember.id} castMember={castMember} {...this.props} />
//                         )
//                 }
//                 </section>
//             </React.Fragment>
//         )
//     }
// }

import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"


export default class CastMemberList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="castMemberButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/castMembers/new")}
                            className="btn btn-success">
                        Add CastMember
                    </button>
                </div>
                <section className="castMembers">               
                {
                    this.props.castMembers.map(castMember =>
                        <CastMemberCard key={castMember.id} castMember={castMember} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}