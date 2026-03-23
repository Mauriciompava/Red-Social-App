import { useState } from 'react';

const Accordion = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="w3-card w3-round">
            <div className="w3-white">
                {/* My Groups */}
                <button
                    onClick={() => toggleSection('groups')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
                </button>
                {expandedSection === 'groups' && (
                    <div className="w3-show w3-container">
                        <p>Some text..</p>
                    </div>
                )}

                {/* My Events */}
                <button
                    onClick={() => toggleSection('events')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
                </button>
                {expandedSection === 'events' && (
                    <div className="w3-show w3-container">
                        <p>Some other text..</p>
                    </div>
                )}

                {/* My Photos */}
                <button
                    onClick={() => toggleSection('photos')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
                </button>
                {expandedSection === 'photos' && (
                    <div className="w3-show w3-container">
                        <div className="w3-row-padding">
                            <br />
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Lights" />
                            </div>
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                            </div>
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Mountains" />
                            </div>
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/forest.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Forest" />
                            </div>
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature 2" />
                            </div>
                            <div className="w3-half">
                                <img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Snow" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
