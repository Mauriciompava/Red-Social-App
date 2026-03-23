import { useState } from 'react';

const FriendRequest = () => {
    const [actionTaken, setActionTaken] = useState(null);

    const handleAccept = () => setActionTaken('accepted');
    const handleDecline = () => setActionTaken('declined');

    if (actionTaken) {
        return (
            <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container w3-padding">
                    <p className="w3-text-theme"><strong>{actionTaken === 'accepted' ? 'Friend request accepted!' : 'Friend request declined!'}</strong></p>
                </div>
            </div>
        );
    }

    return (
        <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
                <p>Friend Request</p>
                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{ width: '50%' }} />
                <br />
                <span>Jane Doe</span>
                <div className="w3-row w3-opacity">
                    <div className="w3-half">
                        <button
                            onClick={handleAccept}
                            className="w3-button w3-block w3-green w3-section"
                            title="Accept"
                        >
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                    <div className="w3-half">
                        <button
                            onClick={handleDecline}
                            className="w3-button w3-block w3-red w3-section"
                            title="Decline"
                        >
                            <i className="fa fa-remove"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendRequest;
