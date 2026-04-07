import { useState } from 'react';

const StatusForm = ({ onPostSubmit }) => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status.trim()) {
            onPostSubmit && onPostSubmit(status);
            setStatus('');
        }
    };

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin" style={{ margin: '16px 0' }}>
            <div className="w3-container w3-padding">
                <h6 className="w3-opacity">Social Media <br /> 🌎🌞Travel Book 🛩️🌎</h6>
                <textarea
                    className="w3-border w3-padding"
                    placeholder="Status: Feeling Trabelicious! 🌍✈️"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{ width: '100%', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' }}
                ></textarea>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="w3-button w3-theme"
                    style={{ marginTop: '12px' }}>
                    <i className="fa fa-pencil"></i>  Post 
                </button>
            </div>
        </div>
    );
};

export default StatusForm;
