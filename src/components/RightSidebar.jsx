import UpcomingEvents from './UpcomingEvents';
import FriendRequest from './FriendRequest';
import Ads from './Ads';
import BugIcon from './BugIcon';

const RightSidebar = () => {
    return (
        <div className="w3-col m2" style={{ padding: '16px 20px' }}>
            <UpcomingEvents />
            <br />

            <FriendRequest />
            <br />

            <Ads />
            <br />

            <BugIcon />
        </div>
    );
};

export default RightSidebar;
