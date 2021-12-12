import './chat.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import { onSnapshot, collection, addDoc, query, orderBy, serverTimestamp } from '@firebase/firestore';

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const user = auth.currentUser;
    const history = useHistory();

    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("token");
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const q = query(collection(db, "message"), orderBy("createdAt", "asc"))
        const unsub = onSnapshot(q, (snapshot) =>
            setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return unsub;
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        const collectionRef = collection(db, "message");
        const payLoad = {
            createdAt: serverTimestamp(),
            message,
            name: user.displayName,
            userID: user.uid
        };
        addDoc(collectionRef, payLoad)
            .then(() => setMessage(''))
            .catch((e) => alert(e.message))
    };

    return (
        <>
            <nav>
                <h1>{user && user.displayName}</h1>
                <a onClick={logout}>Logout</a>
            </nav>
            <div className="create-container">
                {messages.map((message) => (
                    // <div key={message.id} className={user.uid === message.userID ? "body-sent" : "body-recieved"}>
                    <div className="body" key={message.id}>
                        <p id="name">{message.name}</p>
                        <p>{message.message}</p>
                    </div>
                ))}

            </div>
            <div className="input">
                <input value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Send a message" />
                <button onClick={sendMessage}><i id="send-icon" class="fas fa-paper-plane"></i></button>
            </div>
        </>
    )
}

export default ChatPage;
