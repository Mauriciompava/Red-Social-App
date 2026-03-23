import ProfileCard from './ProfileCard';
import Accordion from './Accordion';
import Interests from './Interests';
import AlertBox from './AlertBox';

const LeftSidebar = () => {
    return (
        <div className="w3-col m3" style={{ padding: '16px 20px' }}>
            <ProfileCard />
            <br />

            <Accordion />
            <br />

            <Interests />
            <br />

            <AlertBox />
        </div>
    );
};

export default LeftSidebar;
