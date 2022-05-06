import React from 'react';

const Blogs = () => {
    return (
        <div className='min-height m-2'>
            <h4 className='mt-5'>Q 1. Difference between javascript and nodejs.</h4>
            <p><span className='fs-5 fw-bolder'>Ans:</span> <span className='fw-bolder'>Javascript</span> is a programming language that is used for writing scripts on the website. <br />And<span className='fw-bolder'> NodeJS</span> is a Javascript runtime environment. </p>
            <h4 className='mt-5'>Q 2. When should you use nodejs and when should you use mongodb?</h4>
            <p><span className='fs-5 fw-bolder'>Ans:</span>  If I want to write some kind of stand-alone program or server in JavaScript, then I can use <span className='fw-bolder'>NodeJS</span> for it. <br /> <span className='fw-bolder'>and</span> If i application needs the ability to persistently store data in a way that I can efficiently query or update it<br /> later,  then I would typically use<span className='fw-bolder'>MongoDB</span> .</p>
            <h4 className='mt-5'>Q 3. Differences between sql and nosql databases.</h4>
            <p><span className='fs-5 fw-bolder'>Ans:</span> <span className='fw-bolder'>SQL</span> databases are primarily called as Relational Databases (RDBMS);whereas<br /><span className='fw-bolder'>NoSQL</span> database are primarily called as non-relational or distributed database.</p>
            <h4 className='mt-5'>Q 4. What is the purpose of jwt and how does it work ?</h4>
            <p><span className='fs-5 fw-bolder'>Ans:</span> <span className='fw-bolder'>JWT, or JSON Web Token</span>, is an open standard used to share security information between two parties — a client and a server.<br />Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure<br /> that the claims  cannot be altered after the token is issued.</p>
        </div>
    );
};

export default Blogs;