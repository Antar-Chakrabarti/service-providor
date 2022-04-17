import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="quesition">
                <h2>Que:1. Difference between authorization and authentication</h2>
                <div className="authent">
                    <h5>Authentication</h5>
                    <li>1. Authentication verifies who the user is.</li>
                    <li>2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. </li>
                    <li>3. Authentication is the first step of a good identity and access management process. </li>
                    <li>4. Authentication is visible to and partially changeable by the user. </li>
                </div>
                <div className="author">
                    <h5>Authorization</h5>
                    <li>1. Authorization determines what resources a user can access. </li>
                    <li>2. Authorization works through settings that are implemented and maintained by the organization. </li>
                    <li>3. Authorization always takes place after authentication. </li>
                    <li>4. Authorization is not visible to or changeable by the user. </li>
                </div>
            </div>
            <div className="quesition">
                <h2>Que:2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <div className="authent">
                    <h5>Why are you using firebase?</h5>
                    <p>Ans: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.
                        Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen
                    </p>
                </div>
                <div className="author">
                    <h5> What other options do you have to implement authentication?</h5>
                    <li>1. Parse</li>
                    <li>2. Back4App</li>
                    <li>3. AWS Amplify</li>
                    <li>4. Kuzzle</li>
                    <li>5. Couchbase</li>
                    <li>6. NativeScript</li>
                    <li>7. RxDB</li>
                    <li>8. Flutter</li>
                    <li>9. LoopBack</li>

                </div>
            </div>
            <div className="quesition">
                <h2>Que:3. What other services does firebase provide other than authentication?</h2>
                <div className="authent">
                    <h5>Why are you using firebase?</h5>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                   <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </div>
                <div className="author">
                  

                </div>
            </div>
        </div>
    );
};

export default Blog;