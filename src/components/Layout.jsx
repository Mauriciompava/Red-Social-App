import LeftSidebar from './LeftSidebar';
import MainFeed from './MainFeed';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', backgroundColor: '#f5f6f7' }}>
            {/* Page Container */}
            <div className="w3-container w3-content" style={{ marginTop: '80px', padding: '20px 40px', width: '100%' }}>
                {/* The Grid */}
                <div className="w3-row">
                    <LeftSidebar />
                    <MainFeed />
                    <RightSidebar />
                </div>
            </div>

            <br />
            <Footer />
        </div>
    );
};

export default Layout;
