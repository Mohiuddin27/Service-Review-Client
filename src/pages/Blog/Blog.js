import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className='singleServiceBanner mb-10' style={{ width: '100%' }}>
                <h2 className='text-center'>Blog</h2>
            </div>
            <div className="hero">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                    <img src="https://sazzadul.com/wp-content/uploads/2022/07/SQl-or-NoSQL.jpg" alt="" className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Difference between SQL and NoSQL</h1>
                        <p className="py-6">SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                            Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                            Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                    <div>
                        <h1 className="text-3xl font-bold">What is JWT?</h1>
                        <p className="py-6">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            <br /><strong className='text-2xl'>How JWT Works?</strong><br />
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                    <img src="https://play-lh.googleusercontent.com/3C-hB-KWoyWzZjUnRsXUPu-bqB3HUHARMLjUe9OmPoHa6dQdtJNW30VrvwQ1m7Pln3A" style={{ width: '75%' }} alt="" className="rounded-lg shadow-2xl" />

                </div>
            </div>
            <div className="hero">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                    <img src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp" alt="" className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">What is the difference between javascript and NodeJS?</h1>
                        <p className="py-6">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                            JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                            As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.</p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                    <div>
                        <h1 className="text-3xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                    <img src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png"  alt="" className="rounded-lg shadow-2xl" />

                </div>
            </div>
        </div>
    );
};

export default Blog;