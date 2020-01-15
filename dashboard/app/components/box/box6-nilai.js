import React from 'react'

class Box extends React.Component {
  render() {
    const { title, icon, redirect } = this.props
    return (
      <div className="card box-half teal gradient-shadow white-text" onClick={() => redirect('/nilai')}>
        <div className="box-title center">
          <i className="material-icons left">{icon}</i>{title}<i className="material-icons right">zoom_out_map</i>
        </div>
        <div className="card-content">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</div>
      </div>
    )
  }
}
export default Box