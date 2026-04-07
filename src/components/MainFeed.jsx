import { useState } from 'react';
import StatusForm from './StatusForm';
import Post from './Post';

const MainFeed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: 'John Doe',
            avatar: 'https://www.w3schools.com/w3images/avatar2.png',
            timestamp: '1 min',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: [
                'https://www.w3schools.com/w3images/lights.jpg',
                'https://www.w3schools.com/w3images/nature.jpg'
            ],
            likes: 5,
            isLiked: false,
            comments: [
                { id: 1, author: 'You', text: 'Great post!', timestamp: 'now' }
            ]
        },
        {
            id: 2,
            author: 'Jane Doe',
            avatar: 'https://www.w3schools.com/w3images/avatar5.png',
            timestamp: '16 min',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: [],
            likes: 3,
            isLiked: false,
            comments: []
        },
        {
            id: 3,
            author: 'Angie Jane',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
            timestamp: '32 min',
            content: 'Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: ['https://www.w3schools.com/w3images/nature.jpg'],
            likes: 8,
            isLiked: false,
            comments: []
        }
    ]);

    const handlePostSubmit = (newPostContent) => {
        const newPost = {
            id: posts.length + 1,
            author: 'You',
            avatar: 'https://www.w3schools.com/w3images/avatar3.png',
            timestamp: 'now',
            content: newPostContent,
            images: [],
            likes: 0,
            isLiked: false,
            comments: []
        };
        setPosts([newPost, ...posts]);
    };

    const handleLike = (postId) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1
                };
            }
            return post;
        }));
    };

    const handleAddComment = (postId, commentText) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                const newComment = {
                    id: post.comments.length + 1,
                    author: 'You',
                    text: commentText,
                    timestamp: 'now'
                };
                return {
                    ...post,
                    comments: [...post.comments, newComment]
                };
            }
            return post;
        }));
    };

    const handleEditComment = (postId, commentId, newText) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: post.comments.map(comment =>
                        comment.id === commentId
                            ? { ...comment, text: newText }
                            : comment
                    )
                };
            }
            return post;
        }));
    };

    const handleDeleteComment = (postId, commentId) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: post.comments.filter(comment => comment.id !== commentId)
                };
            }
            return post;
        }));
    };

    return (
        <div className="w3-col m7" style={{ padding: '16px 20px' }}>
            <StatusForm onPostSubmit={handlePostSubmit} />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    postId={post.id}
                    author={post.author}
                    avatar={post.avatar}
                    timestamp={post.timestamp}
                    content={post.content}
                    images={post.images}
                    likes={post.likes}
                    isLiked={post.isLiked}
                    comments={post.comments}
                    onLike={handleLike}
                    onAddComment={handleAddComment}
                    onEditComment={handleEditComment}
                    onDeleteComment={handleDeleteComment}
                />
            ))}
        </div>
    );
};

export default MainFeed;
