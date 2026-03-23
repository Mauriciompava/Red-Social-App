import { useState } from 'react';

const Post = ({ author, avatar, timestamp, content, images = [] }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin" style={{ margin: '16px 0' }}>
            <br />
            <img src={avatar} alt={author} className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
            <span className="w3-right w3-opacity">{timestamp}</span>
            <h4>{author}</h4>
            <br />
            <hr className="w3-clear" />
            <p>{content}</p>

            {images.length > 0 && (
                <>
                    {images.length === 1 ? (
                        // Una sola imagen - más grande y centrada
                        <div style={{ width: '100%', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={images[0]}
                                alt="Post image"
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: 'auto',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                    ) : (
                        // Múltiples imágenes - lado a lado
                        <div className="w3-row-padding" style={{ margin: '0 -16px', marginBottom: '16px' }}>
                            {images.map((image, index) => (
                                <div key={index} className="w3-half">
                                    <img src={image} style={{ width: '100%', borderRadius: '4px' }} alt={`Post image ${index + 1}`} className="w3-margin-bottom" />
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            <button
                onClick={handleLike}
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
            >
                <i className="fa fa-thumbs-up"></i>  Like
            </button>
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                <i className="fa fa-comment"></i>  Comment
            </button>
        </div>
    );
};

export default Post;
