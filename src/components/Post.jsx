import { useState } from 'react';
import './styles/Post.css';

const Post = ({
    postId,
    author,
    avatar,
    timestamp,
    content,
    images = [],
    likes = 0,
    isLiked = false,
    comments = [],
    shares = 0,
    onLike,
    onAddComment,
    onEditComment,
    onDeleteComment,
    onShare,
    onLikeComment,
    onAddReply
}) => {
    const [commentText, setCommentText] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingCommentText, setEditingCommentText] = useState('');
    const [replyingToCommentId, setReplyingToCommentId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [showRepliesForCommentId, setShowRepliesForCommentId] = useState(null);

    const handleLikeClick = () => {
        onLike(postId);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onAddComment(postId, commentText);
            setCommentText('');
        }
    };

    const handleEditComment = (comment) => {
        setEditingCommentId(comment.id);
        setEditingCommentText(comment.text);
    };

    const handleSaveEdit = (commentId) => {
        if (editingCommentText.trim()) {
            onEditComment(postId, commentId, editingCommentText);
            setEditingCommentId(null);
            setEditingCommentText('');
        }
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setEditingCommentText('');
    };

    const handleShareClick = () => {
        onShare && onShare(postId);
    };

    const handleLikeComment = (commentId) => {
        onLikeComment && onLikeComment(postId, commentId);
    };

    const handleReplyClick = (commentId) => {
        setReplyingToCommentId(replyingToCommentId === commentId ? null : commentId);
        setShowRepliesForCommentId(showRepliesForCommentId === commentId ? null : commentId);
    };

    const handleSubmitReply = (commentId) => {
        if (replyText.trim()) {
            onAddReply && onAddReply(postId, commentId, replyText);
            setReplyText('');
        }
    };

    const handleCancelReply = () => {
        setReplyingToCommentId(null);
        setReplyText('');
        setShowRepliesForCommentId(null);
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

            <div className="post-actions">
                <button
                    onClick={handleLikeClick}
                    type="button"
                    className={`w3-button w3-margin-bottom ${isLiked ? 'w3-theme-l1' : 'w3-theme-d1'}`}
                    style={{ fontWeight: isLiked ? 'bold' : 'normal' }}
                >
                    <i className="fa fa-thumbs-up"></i>  Like {likes > 0 && `(${likes})`}
                </button>
                <button
                    onClick={handleShareClick}
                    type="button"
                    className="w3-button w3-margin-bottom w3-theme-d3"
                >
                    <i className="fa fa-share"></i>  Share {shares > 0 && `(${shares})`}
                </button>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                {/* Comments List */}
                {comments.length > 0 && (
                    <div className="comments-list">
                        <h5 style={{ marginTop: '16px', marginBottom: '12px' }}>Comments ({comments.length})</h5>
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment-item">
                                <div className="comment-header">
                                    <strong>{comment.author}</strong>
                                    <span className="comment-timestamp">{comment.timestamp}</span>
                                </div>

                                {editingCommentId === comment.id ? (
                                    <div className="comment-edit-form">
                                        <textarea
                                            value={editingCommentText}
                                            onChange={(e) => setEditingCommentText(e.target.value)}
                                            className="w3-input w3-border"
                                            style={{ marginBottom: '8px' }}
                                        />
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => handleSaveEdit(comment.id)}
                                                className="w3-button w3-theme-d1 w3-small"
                                                style={{ marginRight: '4px' }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancelEdit}
                                                className="w3-button w3-theme-d2 w3-small"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <p className="comment-text">{comment.text}</p>
                                        <div className="comment-actions">
                                            <button
                                                type="button"
                                                onClick={() => handleLikeComment(comment.id)}
                                                className="w3-button w3-small w3-text-blue"
                                                style={{ padding: '0 4px', marginRight: '8px' }}
                                            >
                                                <i className="fa fa-thumbs-up"></i> Like {comment.likes > 0 && `(${comment.likes})`}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleReplyClick(comment.id)}
                                                className="w3-button w3-small w3-text-blue"
                                                style={{ padding: '0 4px', marginRight: '8px' }}
                                            >
                                                <i className="fa fa-reply"></i> Reply
                                            </button>
                                            {comment.author === 'You' && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleEditComment(comment)}
                                                        className="w3-button w3-small w3-text-blue"
                                                        style={{ padding: '0 4px', marginRight: '8px' }}
                                                    >
                                                        <i className="fa fa-edit"></i> Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => onDeleteComment(postId, comment.id)}
                                                        className="w3-button w3-small w3-text-red"
                                                        style={{ padding: '0 4px' }}
                                                    >
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        {replyingToCommentId === comment.id && (
                                            <div className="reply-section">
                                                {/* Show existing replies */}
                                                {showRepliesForCommentId === comment.id && comment.replies && comment.replies.length > 0 && (
                                                    <div className="replies-box">
                                                        <h6 style={{ marginBottom: '12px', fontSize: '12px', fontWeight: 'bold', color: '#666' }}>
                                                            Replies ({comment.replies.length})
                                                        </h6>
                                                        {comment.replies.map((reply) => (
                                                            <div key={reply.id} className="reply-item">
                                                                <div className="reply-header">
                                                                    <strong style={{ fontSize: '12px' }}>{reply.author}</strong>
                                                                    <span className="reply-timestamp">{reply.timestamp}</span>
                                                                </div>
                                                                <p className="reply-text">{reply.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Reply form */}
                                                <div className="reply-form">
                                                    <textarea
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                        placeholder="Write a reply..."
                                                        className="w3-input w3-border"
                                                        style={{ resize: 'vertical', minHeight: '50px', marginBottom: '8px' }}
                                                    />
                                                    <div>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleSubmitReply(comment.id)}
                                                            className="w3-button w3-theme-d2 w3-small"
                                                            style={{ marginRight: '4px' }}
                                                            disabled={!replyText.trim()}
                                                        >
                                                            <i className="fa fa-send"></i> Reply
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={handleCancelReply}
                                                            className="w3-button w3-theme-d3 w3-small"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Add Comment Form */}
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write a comment..."
                        className="w3-input w3-border"
                        style={{ resize: 'vertical', minHeight: '60px', marginTop: '12px' }}
                    />
                    <button
                        type="submit"
                        className="w3-button w3-theme-d2 w3-margin-top"
                        disabled={!commentText.trim()}
                    >
                        <i className="fa fa-comment"></i>  Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Post;
