import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name } = this.props;
        return (
        <div className="user-card">
            <h2>{name}</h2>
        </div>
        );
    }
}

export default UserCard;