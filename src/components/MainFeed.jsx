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
            ]
        },
        {
            id: 2,
            author: 'Jane Doe',
            avatar: 'https://www.w3schools.com/w3images/avatar5.png',
            timestamp: '16 min',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: []
        },
        {
            id: 3,
            author: 'Angie Jane',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
            timestamp: '32 min',
            content: 'Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: ['https://www.w3schools.com/w3images/nature.jpg']
        }
    ]);

    const handlePostSubmit = (newPostContent) => {
        const newPost = {
            id: posts.length + 1,
            author: 'You',
            avatar: 'https://www.w3schools.com/w3images/avatar3.png',
            timestamp: 'now',
            content: newPostContent,
            images: []
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="w3-col m7" style={{ padding: '16px 20px' }}>
            <StatusForm onPostSubmit={handlePostSubmit} />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    avatar={post.avatar}
                    timestamp={post.timestamp}
                    content={post.content}
                    images={post.images}
                />
            ))}
        </div>
    );
};

export default MainFeed;
