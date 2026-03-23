const Interests = () => {
    const interests = [
        'News', 'W3Schools', 'Labels', 'Games', 'Friends',
        'Games', 'Food', 'Design', 'Art', 'Photos'
    ];

    const themeVariants = ['d5', 'd4', 'd3', 'd2', 'd1', '', 'l1', 'l2', 'l3', 'l4', 'l5'];

    return (
        <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
                <p>Interests</p>
                <p>
                    {interests.map((tag, index) => {
                        const variant = themeVariants[index % themeVariants.length];
                        const className = variant ? `w3-tag w3-small w3-theme-${variant}` : 'w3-tag w3-small w3-theme';
                        return (
                            <span key={index} className={className}>
                                {tag}
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default Interests;
